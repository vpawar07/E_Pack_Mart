import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// import pic from "../../../../AssestImage/fifth.jpg"
const ProductForm = () => {
  let { data } = useSelector((state) => state.logged);
  console.log("userObj is ", data);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product: {},
    company: data,
    prodWeight: "",
    prodSize: "",
    materialType: "",
    prodDescription: "",
    stock: "",
    prodPrice: "",
    prodShape: "",
    prodDesignType: "",
    prodColor: "",
    boxCapacity: "",
    materialThickness: "",
    closureType: "",
    prodImage: "",
  });

  useEffect(() => {
    fetch("http://localhost:8152/Category/api/getAllCategories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (e) => {
    fetch(`http://localhost:8152/api/product/getAllProducts`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "product") {
      let product1 = products.filter(
        (prod) =>
          prod.cat_id.cat_id == refCategory.current.value &&
          prod.product_id == value
      );
      setFormData({ ...formData, [name]: product1[0] });
      console.log("Selected Product:", product1[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const refCategory = useRef(null);
  const [imagePath, setImagePath] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file)); // Show preview before upload

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8152/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const uploadedImagePath = await response.text(); // Get image path from backend
      console.log("backend image path: ", uploadedImagePath);
      setImagePath(uploadedImagePath);

      setFormData((prevData) => ({
        ...prevData,
        prodImage: uploadedImagePath, // Store correct path
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = { ...formData, prodImage: imagePath };

    try {
      const response = await fetch(
        "http://localhost:8152/api/saveCompanyProducts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Error adding product");
      }
      console.log("response is :", response.json());
      alert("Product added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

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
            name="product"
            value={formData.product}
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
          <label className="form-label">Weight:</label>
          <input
            type="number"
            className="form-control"
            name="prodWeight"
            // value={formData.prodWeight}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Size:</label>
          <input
            type="text"
            className="form-control"
            name="prodSize"
            // value={formData.prodSize}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Material Type:</label>
          <input
            type="text"
            className="form-control"
            name="materialType"
            // value={formData.materialType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="prodDescription"
            // value={formData.prodDescription}
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
            // value={formData.stock}
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
            name="prodPrice"
            // value={formData.prodPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Shape:</label>
          <input
            type="text"
            className="form-control"
            name="prodShape"
            // value={formData.prodShape}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Design Type:</label>
          <input
            type="text"
            className="form-control"
            name="prodDesignType"
            // value={formData.prodDesignType}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            name="prodColor"
            // value={formData.prodColor}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Box Capacity:</label>
          <input
            type="text"
            className="form-control"
            name="boxCapacity"
            value={formData.boxCapacity}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Material Thickness:</label>
          <input
            type="text"
            className="form-control"
            name="materialThickness"
            value={formData.materialThickness}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Closure Type:</label>
          <input
            type="text"
            className="form-control"
            name="closureType"
            value={formData.closureType}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {preview && (
          <img src={preview} alt="Preview" width="150" className="mt-3" />
        )}
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      {console.log(formData)}
    </>
  );
};

export default ProductForm;
