import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.logged);

  const [cartPopup, setCartPopup] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loginPopup, setLoginPopup] = useState(false);

  const handleAddToCart = () => {
    if (!data?.user_id) {
      setLoginPopup(true); // Show login popup if user is not logged in
      return;
    }

    const cartItem = {
      userId: data.user_id,
      compProdId: cartPopup.compProdId,
      quantity: quantity,
      cartStatus: true,
    };

    fetch("https://localhost:8150/api/transaction/Cart/AddToCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItem),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.message || "Failed to add to cart");
        }
        return response.json();
      })
      .then((data) => {
        alert("Product added to cart successfully!");
        setCartPopup(null);
        setQuantity(1);
      })
      .catch((error) => {
        alert("Failed to add to cart");
      });
  };

  return (
    <div
      className="card shadow-lg border border-light rounded p-3 mb-4"
      onClick={() => navigate("/product-details", { state: { product } })}
      style={{ cursor: "pointer" }}
    >
      <img
        src={product.prodImage || "/path/to/default-image.jpg"}
        className="card-img-top"
        alt={product.product.product_name}
        style={{
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.product.product_name}</h5>
        <p className="fw-bold text-success">₹{product.prodPrice}</p>

        <div className="mt-auto">
          <button
            className="btn btn-primary w-100 mt-2 shadow-sm border-0 rounded"
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation when clicking Add to Cart
              if (!data?.user_id) {
                setLoginPopup(true);
              } else {
                setCartPopup(product);
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Add to Cart Popup */}
      {cartPopup && (
        <div className="product-popup-overlay" onClick={() => setCartPopup(null)}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <h4 className="fw-bold">{cartPopup.product.product_name || "No Name"}</h4>
            <p className="text-success fw-bold">Price per unit: ₹{cartPopup.prodPrice}</p>
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="fw-bold mx-3">{quantity}</span>
              <button
                className="btn btn-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="mt-2 text-danger fw-bold">Total Price: ₹{cartPopup.prodPrice * quantity}</p>
            <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
              Add
            </button>
            <button className="btn btn-secondary mt-3 ms-2" onClick={() => setCartPopup(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Login Required Popup */}
      {loginPopup && (
        <div className="product-popup-overlay" onClick={() => setLoginPopup(false)}>
          <div className="product-popup text-center" onClick={(e) => e.stopPropagation()}>
            <h5 className="text-danger">Please log in first!</h5>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/login")}>
              Go to Login
            </button>
            <button className="btn btn-secondary mt-3 ms-2" onClick={() => setLoginPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

