import React, { useState } from "react";
import { Card, ListGroup, Button, Form, Badge } from "react-bootstrap";

const CustomerFeedback = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: "John Doe",
      rating: 4,
      comment: "Great quality packaging!",
      status: "Approved",
      response: "Thank you!",
    },
    {
      id: 2,
      customer: "Jane Smith",
      rating: 5,
      comment: "Fast delivery and durable boxes.",
      status: "Pending",
      response: "",
    },
  ]);
  const [vendorResponse, setVendorResponse] = useState({
    id: null,
    response: "",
  });

  const handleApprove = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, status: "Approved" } : review
      )
    );
  };

  const handleRespond = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? { ...review, response: vendorResponse.response }
          : review
      )
    );
    setVendorResponse({ id: null, response: "" });
  };

  return (
    <Card
      className="p-3 shadow-lg mt-4 container"
      style={{ maxWidth: "700px" }}
    >
      <h4 className="mb-3 text-center">Customer Feedback</h4>
      <ListGroup>
        {reviews.map((review) => (
          <ListGroup.Item key={review.id} className="mb-2">
            <strong>{review.customer}</strong>{" "}
            <Badge bg="info" className="ms-2">
              {review.rating}★
            </Badge>
            <p className="mb-1">{review.comment}</p>
            <Badge bg={review.status === "Approved" ? "success" : "warning"}>
              {review.status}
            </Badge>
            {review.status === "Pending" && (
              <Button
                variant="success"
                size="sm"
                className="ms-2"
                onClick={() => handleApprove(review.id)}
              >
                Approve
              </Button>
            )}
            {review.response ? (
              <p className="mt-2">
                <strong>Vendor Response:</strong> {review.response}
              </p>
            ) : (
              <Form className="mt-2">
                <Form.Control
                  type="text"
                  placeholder="Write a response..."
                  value={
                    vendorResponse.id === review.id
                      ? vendorResponse.response
                      : ""
                  }
                  onChange={(e) =>
                    setVendorResponse({
                      id: review.id,
                      response: e.target.value,
                    })
                  }
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleRespond(review.id)}
                >
                  Respond
                </Button>
              </Form>
            )}
          </ListGroup.Item>
        ))}
        {reviews.length === 0 && (
          <p className="text-center text-muted mt-2">No reviews available</p>
        )}
      </ListGroup>
    </Card>
  );
};

export default CustomerFeedback;
