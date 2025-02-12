import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Card,
  Table,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "../../Redux/slice";

const OrderManagement = () => {
  const { data } = useSelector((state) => state.logged);
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState({});
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  console.log("editorder ", editOrder);
  useEffect(() => {
    fetch(
      `http://localhost:8150/api/crud/getCompanyWiseProducts?companyId=${data.company_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging
        setOrders(Array.isArray(data) ? data : []); // Ensure it's always an array
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setOrders([]); // Set to an empty array on error
      });
  }, []);

  const handleDeleteOrder = async (compProdId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8150/api/crud/deleteCompanyProduct/${compProdId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setOrders(orders.filter((order) => order.compProdId !== compProdId));
        alert("Product deleted successfully.");
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    }
  };

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
      const response = await fetch("http://localhost:8150/api/crud/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const uploadedImagePath = await response.text(); // Get image path from backend
      console.log("backend image path: ", uploadedImagePath);
      setImagePath(uploadedImagePath);

      setEditOrder((prevData) => ({
        ...prevData,
        prodImage: uploadedImagePath, // Store correct path
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleEditOrder = (order) => {
    // dispatch(Edit());
    let obj = {
      compProdId: order.compProdId,
      productName: order.product.product_name,
      prodWeight: order.prodWeight,
      prodSize: order.prodSize,
      materialType: order.materialType,
      prodDescription: order.prodDescription,
      stock: order.stock,
      prodPrice: order.prodPrice,
      prodShape: order.prodShape,
      prodDesignType: order.prodDesignType,
      prodColor: order.prodColor,
      boxCapacity: order.boxCapacity,
      materialThickness: order.materialThickness,
      closureType: order.closureType,
      prodImage: order.prodImage,
    };
    setEditOrder(obj);
  };

  const handleUpdateOrder = () => {
    if (!editOrder || !editOrder.compProdId) {
      console.error("No product selected for update");
      return;
    }
    let obj = { ...editOrder };
    delete obj.compProdId;
    delete obj.productName;
    axios
      .patch(
        `http://localhost:8150/api/crud/updateCompanyProduct/${editOrder.compProdId}`,
        obj
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        return response.text(); // Backend returns a String response
      })
      .then((message) => {
        console.log("Product updated successfully:", message);

        // Update local state to reflect changes
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.compProdId === editOrder.compProdId ? editOrder : order
          )
        );

        // Reset editOrder state
        setEditOrder(null);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-lg">
        <h3 className="mb-4 text-center text-primary">Order Management</h3>

        {/* Search Bar */}
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>

        {/* Product Table */}
        <Table striped bordered hover responsive className="text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) =>
                order.product.product_name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((order, index) => (
                <tr
                  key={order.compProdId}
                  className={order.stock < 20 ? "table-danger" : ""}
                >
                  <td>{order.compProdId}</td>
                  <td>{order.product.product_name}</td>
                  <td>{order.stock}</td>
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
                      onClick={() => handleDeleteOrder(order.compProdId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        {/* Update Product Form */}
        {editOrder && (
          <div className="mt-4">
            <h5 className="text-center text-info">Update Product</h5>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editOrder.productName}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type="number"
                      value={editOrder.stock}
                      onChange={(e) =>
                        setEditOrder({ ...editOrder, stock: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <h6>Current Image</h6>
              <img
                src={editOrder?.prodImage}
                style={{ width: "300px" }}
                alt="no image"
              />

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product Weight</Form.Label>
                    <Form.Control
                      type="number"
                      value={editOrder.prodWeight}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          prodWeight: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product Size</Form.Label>
                    <Form.Control
                      type="text"
                      value={editOrder.prodSize}
                      onChange={(e) =>
                        setEditOrder({ ...editOrder, prodSize: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Material Type</Form.Label>
                    <Form.Control
                      type="text"
                      value={editOrder.materialType}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          materialType: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                      type="number"
                      value={editOrder.prodPrice}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          prodPrice: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product Shape</Form.Label>
                    <Form.Control
                      type="text"
                      value={editOrder.prodShape}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          prodShape: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Material Thickness</Form.Label>
                    <Form.Control
                      type="number"
                      value={editOrder.materialThickness}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          materialThickness: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button variant="success" onClick={handleUpdateOrder}>
                  Update Product
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Card>
    </div>
  );
};

export default OrderManagement;
