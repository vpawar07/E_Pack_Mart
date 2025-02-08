// import React from "react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProductList.css";

const ProductCard = ({ product }) => {

  console.log("this product",product);
  const { data } = useSelector((state) => state.logged);

  // console.log(product?.prodImage ?? null);
  const [cartPopup, setCartPopup] = useState(null);
  const [quantity, setQuantity] = useState(1);
console.log("popup",cartPopup);


  const handleAddToCart = () => {
    const cartItem = {
      userId: data.user_id,
      compProdId: cartPopup.compProdId,
      quantity: quantity,
      cartStatus: true
    };
    console.log(cartItem);
  
    fetch("https://localhost:7182/api/Cart/AddToCart", {
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
        console.log("Success:", data);
        alert("Product added to cart successfully!");
        setCartPopup(null);
        setQuantity(1);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add to cart");
      });
  };
  
  return (
    <div className="card shadow-lg border border-light rounded p-3 mb-4">
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
        <p className="card-text">{product.prodDescription}</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Company:</strong> {product.company.user_id.name}
          </li>
          <li className="list-group-item">
            <strong>Price:</strong> ₹{product.prodPrice}
          </li>
          <li className="list-group-item">
            <strong>Weight:</strong> {product.prodWeight} kg
          </li>
          <li className="list-group-item">
            <strong>Size:</strong> {product.prodSize}
          </li>
          <li className="list-group-item">
            <strong>Material:</strong> {product.materialType}
          </li>
          <li className="list-group-item">
            <strong>Stock:</strong> {product.stock} units
          </li>
        </ul>
        <div className="mt-auto">
          <button className="btn btn-primary w-100 mt-2 shadow-sm border-0 rounded"
          onClick={(e) => {
            e.stopPropagation();
            setCartPopup(product);
          }}
          >
            Add to Cart
          </button>
        </div>
      </div>


      {cartPopup && (
        <div className="product-popup-overlay" onClick={() => setCartPopup(null)}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <h4 className="fw-bold">{cartPopup.product.product_name || "No Name"}</h4>
            <p className="text-success fw-bold">Price per unit: ₹{cartPopup.prodPrice}</p>
            <div className="d-flex align-items-center justify-content-between">
              <button className="btn btn-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="fw-bold mx-3">{quantity}</span>
              <button className="btn btn-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <p className="mt-2 text-danger fw-bold">Total Price: ₹{cartPopup.prodPrice * quantity}</p>
            <button className="btn btn-primary mt-3" onClick={handleAddToCart}>Add</button>
            <button className="btn btn-secondary mt-3 ms-2" onClick={() => setCartPopup(null)}>Cancel</button>
          </div>
        </div>
      )}



    </div>
  );
};

export default ProductCard;

// export default ProductCard;
