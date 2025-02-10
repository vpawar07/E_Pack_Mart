import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddProductyType() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8153/Category/api/getAllCategories")
      .then((res) => {
        console.log("categoryResponse is ", res.data);
        setCategory(res.data);
      })
      .catch((err) => console.log("got error ", err));
  }, []);
  //   {
  //     "product_id": 111,
  //     "product_name": "Plastic Wrap",
  //     "cat_id": {
  //         "cat_id": 50,
  //         "cat_name": "Plastic Films"
  //     }
  // }

  const [prod, setProd] = useState({
    product_name: "",
    cat_id: null,
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:8153/api/product/saveProduct", prod)
      .then((res) => {
        console.log("response.data", res.data);
      })
      .catch((err) => console.log("error is ", err));
  };

  const handle = (e) => {
    const { name, value } = e.target;
    if (e.target.name == "cat_id") {
      let arr = category.filter((val) => {
        return val.cat_id == value;
      });
      setProd((prev) => ({
        ...prev,
        [name]: arr[0],
      }));
    } else {
      setProd((pre) => ({
        ...pre,
        [name]: value,
      }));
    }
    console.log("prod ", prod);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="container-fluid">
          <div className="mb-3">
            <select name="cat_id" id="" onChange={handle}>
              Select Category
              <option value="">Select</option>
              {category.map((categ) => {
                return <option value={categ.cat_id}>{categ.cat_name}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="product_name" className="form-label">
              Product
            </label>
            <input
              type="text"
              className="form-control"
              name="product_name"
              placeholder="Enter ProductType"
              onChange={handle}
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
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
