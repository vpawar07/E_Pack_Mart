import React, { useState, useEffect, useRef } from "react";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    company_id: "",
    product_id: "",
    prod_weight: "",
    prod_size: "",
    material_type: "",
    prod_description: "",
    stock: "",
    prod_price: "",
    shape: "",
    design_type: "",
    color: "",
    box_capacity: "",
    material_thickness: "",
    closure_type: "",
  });

  useEffect(() => {
    fetch("http://localhost:8082/getAllCategories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (e) => {
    fetch(`http://localhost:8082/getAllProducts`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "product_id") {
      let product = products.filter((data) => {
        return (
          data.cat_id.cat_id == refCategory.current.value &&
          data.cat_id == value
        );
      });
      setFormData({ ...formData, [name]: product[0] });
      console.log("productt", product);
    } else if (name == "company_id") {
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8082/insertProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error adding product");
        }
        return response.json();
      })
      .then((okObject) => {
        const fd = new FormData();
        fd.append("prod_image", image);
        const reqOption1 = {
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          body: fd,
        };
        fetch(
          "http://localhost:8082/uploadImage/" + okObject.comp_prod_id,
          reqOption1
        )
          .then((res) => res.json())
          .then((obj) => {
            if (obj) {
              alert("sucess");
            } else {
              alert("img fail");
            }
          });
      })
      .catch((error) => alert(error.message));
  };
  const refCategory = useRef(null);
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            onChange={handleCategoryChange}
            ref={refCategory}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.cat_id} value={cat.cat_id}>
                {cat.cat_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Product:</label>
          <select
            className="form-select"
            name="product_id"
            value={formData.product_id}
            onChange={handleInputChange}

            // disabled={!products.length}
          >
            <option value="">Select a product</option>
            {products.map(
              (prod) =>
                refCategory.current.value == prod.cat_id.cat_id && (
                  <option key={prod.product_id} value={prod.product_id}>
                    {prod.product_name}
                  </option>
                )
            )}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Company ID:</label>
          <input
            type="number"
            className="form-control"
            name="company_id"
            value={formData.company_id}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Weight:</label>
          <input
            type="number"
            className="form-control"
            name="prod_weight"
            value={formData.prod_weight}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Size:</label>
          <input
            type="text"
            className="form-control"
            name="prod_size"
            value={formData.prod_size}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Material Type:</label>
          <input
            type="text"
            className="form-control"
            name="material_type"
            value={formData.material_type}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="prod_description"
            value={formData.prod_description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="prod_price"
            value={formData.prod_price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            name="image"
            // value={formData.prod.image}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shape:</label>
          <input
            type="text"
            className="form-control"
            name="shape"
            value={formData.shape}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Design Type:</label>
          <input
            type="text"
            className="form-control"
            name="design_type"
            value={formData.design_type}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Box Capacity:</label>
          <input
            type="text"
            className="form-control"
            name="box_capacity"
            value={formData.box_capacity}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Material Thickness:</label>
          <input
            type="text"
            className="form-control"
            name="material_thickness"
            value={formData.material_thickness}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Closure Type:</label>
          <input
            type="text"
            className="form-control"
            name="closure_type"
            value={formData.closure_type}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      {console.log(formData)}
    </>
  );
};

export default ProductForm;
