import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageCategory() {
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={() => navigate("/add-category")}>
            Add Category
          </button>
          <button className="btn btn-success" onClick={() => navigate("/add-product")}>
            Add Product Type
          </button>
        </div>
      </div>
    </div>
  );
}
