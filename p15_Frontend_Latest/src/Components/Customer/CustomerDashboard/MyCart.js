import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { data } = useSelector((state) => state.logged);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  console.log("This is cart Page");

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        `http://localhost:8150/api/transaction/Cart/getMyCart?userid=${data.user_id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const result = await response.json();
      setCartItems(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(
        `http://localhost:8150/api/transaction/Cart/removeCartProduct/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.cartId !== id)
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item?.compProd?.prodPrice * item.quantity,
    0
  );

  const handleSelect = (id) => {
    setSelectedProducts((prevSelected) => {
      const newSelection = new Set(prevSelected);
      newSelection.has(id) ? newSelection.delete(id) : newSelection.add(id);
      return newSelection;
    });
  };

  const selectedTotalPrice = cartItems
    .filter((item) => selectedProducts.has(item.cartId))
    .reduce((acc, item) => acc + item?.compProd?.prodPrice * item.quantity, 0);

  const handleOrder = () => {
    if (selectedProducts.size === 0) {
      alert("Please select at least one product to order.");
      return;
    }
    console.log(selectedProducts);

    const selectedItems = cartItems.filter((item) =>
      selectedProducts.has(item.cartId)
    );
    console.log(selectedItems);

    navigate("/payment", { state: selectedItems });
    // onOrder(selectedItems);
  };

  return (
    <div className="container mt-5 p-4 bg-light shadow rounded">
      <h2 className="text-center mb-4 text-primary">🛒 Your Cart</h2>

      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-dark">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.cartId}>
                    <td>
                      {item.compProd?.product?.productName || "Unknown Product"}
                    </td>
                    <td className="text-center">
                      ₹{item?.compProd?.prodPrice}
                    </td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      ₹{item?.compProd?.prodPrice * item.quantity}
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="btn btn-danger btn-sm"
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="alert alert-info text-right font-weight-bold">
            Total Amount: ₹{totalPrice}
          </div>

          <button
            onClick={() => setShowOrderPopup(true)}
            className="btn btn-success btn-block"
          >
            ✅ Proceed to Order
          </button>
        </>
      )}

      {showOrderPopup && (
        <div className="modal d-block bg-dark bg-opacity-50">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">📦 Select Products for Order</h5>
                <button
                  onClick={() => setShowOrderPopup(false)}
                  className="btn-close"
                ></button>
              </div>
              <div className="modal-body">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="form-check">
                    <input
                      type="checkbox"
                      checked={selectedProducts.has(item.cartId)}
                      onChange={() => handleSelect(item.cartId)}
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      {item.compProd?.product?.productName || "Unknown Product"}{" "}
                      - ₹{item?.compProd?.prodPrice * item.quantity}
                    </label>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <div className="text-primary font-weight-bold">
                  Total: ₹{selectedTotalPrice}
                </div>
                <button
                  onClick={() => setShowOrderPopup(false)}
                  className="btn btn-secondary"
                >
                  ❌ Cancel
                </button>
                <button onClick={handleOrder} className="btn btn-success">
                  ✅ Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Cart = () => {
//     const { data } = useSelector((state) => state.logged);

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Function to fetch cart items
//   const fetchCartItems = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(`https://localhost:7053/api/Cart/getMyCart?userid=${data.user_id}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch cart items");
//       }
//       const result = await response.json();
//       setCartItems(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={fetchCartItems}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         My Cart
//       </button>

//       {loading && <p className="mt-4 text-gray-600">Loading...</p>}
//       {error && <p className="mt-4 text-red-500">{error}</p>}

//       <div className="mt-4">
//         {cartItems.length === 0 && !loading && !error && <p>No items in the cart.</p>}

//         {cartItems.map((item) => (
//           <div key={item.id} className="border p-4 rounded mb-2">
//             <h3 className="font-bold">{item.compProd?.product?.productName || "Unknown Product"}</h3>
//             <p>Price: ₹{item?.compProd?.prodPrice*item?.quantity || "N/A"}</p>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
