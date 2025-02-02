import React, { useState } from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Low Stock", message: "Product X is running low!", variant: "danger" },
    { id: 2, type: "Order Update", message: "Order #1234 has been shipped!", variant: "primary" },
    { id: 3, type: "Product Approval", message: "Your new product has been approved!", variant: "success" },
    { id: 4, type: "Promotion", message: "Limited-time discount on bulk orders!", variant: "warning" },
  ]);

  const handleDismiss = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <Card className="p-3 shadow-lg mt-4 container" style={{ maxWidth: "600px" }}>
      <h4 className="mb-3 text-center">Notifications</h4>
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroup.Item key={notification.id} className="d-flex justify-content-between align-items-center">
            <Badge bg={notification.variant} className="me-2">{notification.type}</Badge>
            {notification.message}
            <Button variant="outline-danger" size="sm" onClick={() => handleDismiss(notification.id)}>
              Dismiss
            </Button>
          </ListGroup.Item>
        ))}
        {notifications.length === 0 && <p className="text-center text-muted mt-2">No new notifications</p>}
      </ListGroup>
    </Card>
  );
};

export default Notifications;
