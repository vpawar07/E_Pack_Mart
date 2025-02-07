import React, { useState } from "react";
import { Form, Button, Card, Table, Alert, InputGroup } from "react-bootstrap";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: "Box A", quantity: 50, status: "Pending" },
    { id: 2, product: "Box B", quantity: 10, status: "Shipped" },
  ]);
  const [newOrder, setNewOrder] = useState({
    product: "",
    quantity: "",
    status: "Pending",
  });
  const [editOrder, setEditOrder] = useState(null);
  const [search, setSearch] = useState("");

  const handleAddOrder = () => {
    if (newOrder.product && newOrder.quantity) {
      setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
      setNewOrder({ product: "", quantity: "", status: "Pending" });
    }
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
  };

  const handleUpdateOrder = () => {
    setOrders(
      orders.map((order) => (order.id === editOrder.id ? editOrder : order))
    );
    setEditOrder(null);
  };

  return (
    <Card
      className="p-4 shadow-lg mt-4 container"
      style={{ maxWidth: "800px" }}
    >
      <h3 className="mb-3 text-center">Order Management</h3>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) =>
              order.product.toLowerCase().includes(search.toLowerCase())
            )
            .map((order, index) => (
              <tr
                key={order.id}
                className={order.quantity < 20 ? "table-danger" : ""}
              >
                <td>{index + 1}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditOrder(order)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {editOrder && (
        <div className="mb-3">
          <h5>Edit Order</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={editOrder.product}
                onChange={(e) =>
                  setEditOrder({ ...editOrder, product: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={editOrder.quantity}
                onChange={(e) =>
                  setEditOrder({ ...editOrder, quantity: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="success" onClick={handleUpdateOrder}>
              Update Order
            </Button>
          </Form>
        </div>
      )}
      <h5>Add New Order</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={newOrder.product}
            onChange={(e) =>
              setNewOrder({ ...newOrder, product: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Quantity"
            value={newOrder.quantity}
            onChange={(e) =>
              setNewOrder({ ...newOrder, quantity: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="success" onClick={handleAddOrder}>
          Add Order
        </Button>
      </Form>
    </Card>
  );
};

export default OrderManagement;
