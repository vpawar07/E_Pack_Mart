import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "16px" }}>
            {product.name}
          </h5>
          <p className="card-text">
            <small>{product.company}</small>
            <br />
            <small>{product.location}</small>
          </p>
          <p className="card-text text-primary fw-bold">₹ {product.price}</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-outline-primary w-100 mb-2">
            View Number
          </button>
          <button className="btn btn-primary w-100">Get Best Price</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
