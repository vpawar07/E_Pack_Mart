import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../CSS/ProductDetails.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.logged);

  const product = location.state?.product;
  const [cartPopup, setCartPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loginPopup, setLoginPopup] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    if (product?.compProdId) {
      fetch(`https://localhost:9154/api/Review/getReviews?compProdId=${product.compProdId}`)
        .then((response) => response.json())
        .then((data) => {
          setReviews(data.reviews);
          setAverageRating(data.averageRating);
        })
        .catch((error) => console.error("Failed to fetch reviews", error));
    }
  }, [product?.compProdId]);

  if (!product) {
    return <h3 className="text-center text-danger">Product not found!</h3>;
  }

  return (
    <div className="container mt-4 product-details-container">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={product.prodImage || "/path/to/default-image.jpg"}
            alt={product.product.product_name}
            className="product-image"
          />
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h2>{product.product.product_name}</h2>
          <p className="text-muted">{product.prodDescription}</p>
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
            <li className="list-group-item">
              <strong>Rating:</strong> 
              <span style={{ color: "gold", fontSize: "20px", marginLeft: "10px" }}>
                {"★".repeat(Math.floor(averageRating)) + "☆".repeat(5 - Math.floor(averageRating))}
              </span>
              ({averageRating.toFixed(1)})
            </li>
          </ul>
          <button className="btn btn-info w-100" onClick={() => setShowReviews(!showReviews)}>
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={() => (data?.user_id ? setCartPopup(true) : setLoginPopup(true))}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      {showReviews && (
        <div className="mt-4">
          <h4>Customer Reviews</h4>
          {reviews.length === 0 ? (
            <p className="text-muted">No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border p-2 mb-2">
                <strong>{review.userName}:</strong>
                <p>{review.reviewDesc}</p>
                <span style={{ color: "gold" }}>
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;











// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "../CSS/ProductDetails.css";
// import "bootstrap/dist/css/bootstrap.min.css"; 

// const ProductDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { data } = useSelector((state) => state.logged);

//   const product = location.state?.product;
//   const [cartPopup, setCartPopup] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [loginPopup, setLoginPopup] = useState(false);

//   if (!product) {
//     return <h3 className="text-center text-danger">Product not found!</h3>;
//   }

//   const handleAddToCart = () => {
//     if (!data?.user_id) {
//       setLoginPopup(true);
//       return;
//     }

//     const cartItem = {
//       userId: data.user_id,
//       compProdId: product.compProdId,
//       quantity: quantity,
//       cartStatus: true,
//     };

//     fetch("https://localhost:9154/api/Cart/AddToCart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(cartItem),
//     })
//       .then(async (response) => {
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData?.message || "Failed to add to cart");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         alert("Product added to cart successfully!");
//         setCartPopup(false);
//         setQuantity(1);
//       })
//       .catch((error) => {
//         alert("Failed to add to cart");
//       });
//   };

//   return (
//     <div className="container mt-4 product-details-container">
//       <div className="row">
//         {/* Product Image Section */}
//         <div className="col-md-6 d-flex justify-content-center">
//           <img
//             src={product.prodImage || "/path/to/default-image.jpg"}
//             alt={product.product.product_name}
//             className="product-image"
//           />
//         </div>

//         {/* Product Details Section */}
//         <div className="col-md-6">
//           <h2>{product.product.product_name}</h2>
//           <p className="text-muted">{product.prodDescription}</p>
//           <ul className="list-group list-group-flush mb-3">
//             <li className="list-group-item">
//               <strong>Company:</strong> {product.company.user_id.name}
//             </li>
//             <li className="list-group-item">
//               <strong>Price:</strong> ₹{product.prodPrice}
//             </li>
//             <li className="list-group-item">
//               <strong>Weight:</strong> {product.prodWeight} kg
//             </li>
//             <li className="list-group-item">
//               <strong>Size:</strong> {product.prodSize}
//             </li>
//             <li className="list-group-item">
//               <strong>Material:</strong> {product.materialType}
//             </li>
//             <li className="list-group-item">
//               <strong>Stock:</strong> {product.stock} units
//             </li>
//           </ul>
//           <button
//             className="btn btn-primary w-100 mt-2"
//             onClick={() => (data?.user_id ? setCartPopup(true) : setLoginPopup(true))}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Add to Cart Popup */}
//       {cartPopup && (
//         <div className="product-popup-overlay" onClick={() => setCartPopup(false)}>
//           <div className="product-popup" onClick={(e) => e.stopPropagation()}>
//             <h4 className="fw-bold">{product.product.product_name}</h4>
//             <p className="text-success fw-bold">Price per unit: ₹{product.prodPrice}</p>
//             <div className="d-flex align-items-center justify-content-between">
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 -
//               </button>
//               <span className="fw-bold mx-3">{quantity}</span>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </button>
//             </div>
//             <p className="mt-2 text-danger fw-bold">
//               Total Price: ₹{product.prodPrice * quantity}
//             </p>
//             <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
//               Add
//             </button>
//             <button className="btn btn-secondary mt-3 ms-2" onClick={() => setCartPopup(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Required Popup */}
//       {loginPopup && (
//         <div className="product-popup-overlay" onClick={() => setLoginPopup(false)}>
//           <div className="product-popup text-center" onClick={(e) => e.stopPropagation()}>
//             <h5 className="text-danger">Please log in first!</h5>
//             <button className="btn btn-primary mt-3" onClick={() => navigate("/login")}>
//               Go to Login
//             </button>
//             <button className="btn btn-secondary mt-3 ms-2" onClick={() => setLoginPopup(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
