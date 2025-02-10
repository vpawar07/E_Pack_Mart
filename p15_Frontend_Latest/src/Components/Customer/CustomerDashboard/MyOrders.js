import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const MyOrders = () => {
  const { data } = useSelector((state) => state.logged);
  const [orders, setOrders] = useState([]);
  const [reviewData, setReviewData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data?.user_id) {
      fetch(`https://localhost:9154/api/Cart/getHistory?userid=${data.user_id}`)
        .then((response) => response.json())
        .then((orderData) => {
          setOrders(orderData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          setLoading(false);
        });
    }
  }, [data?.user_id]);

  const handleReviewChange = (compProdId, field, value) => {
    setReviewData((prev) => ({
      ...prev,
      [compProdId]: {
        ...prev[compProdId],
        [field]: value,
      },
    }));
  };

  const submitReview = (compProdId) => {
    const review = reviewData[compProdId];

    if (!review || !review.rating || !review.reviewDesc) {
      alert("Please provide a rating and description.");
      return;
    }

    const reviewPayload = {
      reviewId: 0,
      userId: data.user_id,
      compProdId: compProdId,
      reviewDesc: review.reviewDesc,
      rating: parseInt(review.rating, 10),
    };

    fetch("https://localhost:9154/api/Review/giveReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewPayload),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Review submitted successfully!");
        setReviewData((prev) => ({ ...prev, [compProdId]: {} }));
      })
      .catch((error) => console.error("Error submitting review:", error));
  };

  if (loading) {
    return <div className="text-center mt-4"><strong>Loading orders...</strong></div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Completed Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-muted">No completed orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Order {index + 1}</h5>
              {order.compProd && (
                <div className="row mt-3 border-bottom pb-3">
                  <div className="col-md-3 text-center">
                    <img
                      src={order.compProd.prodImage || "/default-product.jpg"}
                      alt={order.compProd.prodDescription}
                      className="img-fluid rounded"
                      style={{ maxHeight: "120px" }}
                    />
                  </div>
                  <div className="col-md-5">
                    <h6>{order.compProd.prodDescription}</h6>
                    <p><strong>Material:</strong> {order.compProd.materialType}</p>
                    <p><strong>Quantity:</strong> {order.quantity}</p>
                    <p><strong>Price:</strong> ₹{order.compProd.prodPrice}</p>
                  </div>
                  <div className="col-md-4">
                    <h6>Leave a Review</h6>
                    <select
                      className="form-control mb-2"
                      value={reviewData[order.compProd.compProdId]?.rating || ""}
                      onChange={(e) => handleReviewChange(order.compProd.compProdId, "rating", e.target.value)}
                    >
                      <option value="">Select Rating</option>
                      <option value="1">⭐☆☆☆☆</option>
                      <option value="2">⭐⭐☆☆☆</option>
                      <option value="3">⭐⭐⭐☆☆</option>
                      <option value="4">⭐⭐⭐⭐☆</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                    <textarea
                      className="form-control mb-2"
                      placeholder="Write a review..."
                      value={reviewData[order.compProd.compProdId]?.reviewDesc || ""}
                      onChange={(e) => handleReviewChange(order.compProd.compProdId, "reviewDesc", e.target.value)}
                    />
                    <button
                      className="btn btn-success w-100"
                      onClick={() => submitReview(order.compProd.compProdId)}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
