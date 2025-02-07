import axios from "axios";
import React, { useState } from "react";

export default function AddCategory() {
  let category = {
    cname: "",
  };
  const [categoryData, setCategoryData] = useState(category);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8152/Category/api/saveCategory", categoryData)
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log("save category is ", data))
      .catch((error) => {
        console.error(
          "Error saving category:",
          error.response?.data || error.message
        );
      });
  };
  return (
    <>
      <div className="container mt-3">
        <div className="container-fluid">
          <div className="mb-3">
            <label htmlFor="cname" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="cname"
              name="cname"
              placeholder="Enter category"
              onChange={(e) => {
                let name = e.target.name;
                let value = e.target.value;
                setCategoryData((prevData) => ({
                  ...prevData,
                  [name]: value,
                }));
              }}
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-success"
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onClick={handleSubmit}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
