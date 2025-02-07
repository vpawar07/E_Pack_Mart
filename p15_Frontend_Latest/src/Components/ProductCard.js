import React from "react";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
//       <div className="card h-100">
//         <img
//           src={product.image}
//           className="card-img-top"
//           alt={product.name}
//           style={{ height: "150px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title" style={{ fontSize: "16px" }}>
//             {product.name}
//           </h5>
//           <p className="card-text">
//             <small>{product.company}</small>
//             <br />
//             <small>{product.location}</small>
//           </p>
//           <p className="card-text text-primary fw-bold">₹ {product.price}</p>
//         </div>
//         <div className="card-footer text-center">
//           <button className="btn btn-outline-primary w-100 mb-2">
//             View Number
//           </button>
//           <button className="btn btn-primary w-100">Get Best Price</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product?.prodImage ?? null);
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
          <button className="btn btn-primary w-100 mt-2 shadow-sm border-0 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// export default ProductCard;
