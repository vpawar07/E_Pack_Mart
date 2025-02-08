import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  const { data } = useSelector((state) => state.logged);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // For Thank You popup
  const navigate = useNavigate();

  const location = useLocation();
  const orderProduct = location.state; // Receiving object

  

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const fetchPaymentMethods = async () => {
    try {
      const response = await fetch("https://localhost:7182/api/PaymentMethod/GetPaymentMethod");
      if (!response.ok) {
        throw new Error("Failed to fetch payment methods");
      }
      const methods = await response.json();
      setPaymentMethods(methods);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = orderProduct.reduce((sum, item) => sum + item?.compProd?.prodPrice * item.quantity, 0);

  const paymentData = {
    userId: data.user_id,
    totalPrice: totalAmount,
    cartObj: orderProduct,
    paymentMethodId: Number(selectedMethod),
  };

  

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }

    const confirmPayment = window.confirm("Are you sure you want to proceed with the payment?");
    if (!confirmPayment) return;
    console.log(orderProduct);
    
    console.log(JSON.stringify(paymentData));
    try {
      const response = await fetch("https://localhost:7182/api/Cart/paymentOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Payment failed. Please try again.");
      }

      setShowPopup(true); // Show Thank You popup

    } catch (error) {
      alert(error.message);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div className="container mt-5 p-4 bg-light shadow rounded">
      <h2 className="text-center text-primary">💰 Payment</h2>

      {/* Order Details Table */}
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orderProduct.map((item, index) => (
              <tr key={index}>
                <td>{item?.compProd?.product?.productName}</td>
                <td>{item.quantity}</td>
                <td>₹{item?.compProd?.prodPrice}</td>
                <td>₹{item?.compProd?.prodPrice * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overall Total */}
      <div className="alert alert-info text-center font-weight-bold">
        Overall Total: ₹{totalAmount}
      </div>

      {/* Payment Method Dropdown */}
      {loading ? (
        <p className="text-center text-muted">Loading payment methods...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="form-group text-center">
          <label className="font-weight-bold">Select Payment Method:</label>
          <select
            className="form-control mt-2"
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
          >
            <option value="">-- Choose Payment Method --</option>
            {paymentMethods.map((method) => (
              <option key={method.payMethodId} value={method.payMethodId}>
                {method.payMethodType}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Pay Now Button */}
      <div className="text-center mt-4">
        <button
          className="btn btn-success btn-lg"
          onClick={handlePayment}
          disabled={!selectedMethod}
        >
          ✅ Pay Now
        </button>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3 className="text-success text-center">🎉 Thank You! 🎉</h3>
            <p className="text-center">Your payment has been successfully processed.</p>
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={handleClosePopup}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Styling */}
      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .popup-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            width: 300px;
          }
        `}
      </style>
    </div>
  );
};

export default Payment;
