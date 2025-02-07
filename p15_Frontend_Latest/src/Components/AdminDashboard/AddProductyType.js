import React from "react";

export default function AddProductyType() {
  return (
    <>
  <div className="container mt-3">
  <div className="container-fluid">
    <div className="mb-3">
      <label htmlFor="product_name" className="form-label">Product</label>
      <input type="text" className="form-control" id="product_name" placeholder="Enter ProductType" />
    </div>
    <div className="mb-3">
      <button className="btn btn-success" style={{
        backgroundColor: "#28a745", 
        color: "white", 
        padding: "10px 20px", 
        borderRadius: "5px", 
        fontSize: "16px", 
        fontWeight: "bold", 
        border: "none",
        cursor: "pointer", 
        transition: "background-color 0.3s"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}>
        Add Product
      </button>
    </div>
  </div>
</div>
    </>
  );
}
