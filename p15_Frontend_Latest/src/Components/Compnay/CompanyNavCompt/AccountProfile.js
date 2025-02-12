import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const VendorProfile = () => {
  const { data } = useSelector((state) => state.logged);
  console.log("Data is data ", data);

  const [isEditing, setIsEditing] = useState(false);
  const [vendorData, setVendorData] = useState({
    companyName: "ABC Pvt Ltd",
    email: "vendor@example.com",
    panCard: "ABCDE1234F",
    gstDetails: "27AAACP1234A1Z5",
    msmeCertification: "MSME123456",
    username: "vendor_user",
    accountStatus: "Active",
    bankDetails: "HDFC Bank - 1234567890",
    city: "Mumbai",
    state: "Maharashtra",
    companyAddress: "123, Industrial Area, Mumbai"
  });

  useEffect(() => {
    data?.user_id && setVendorData(data?.user_id);
  }, [data]);
  const handleChange = (e) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // API call to save data (to be implemented)
    console.log("Updated Data:", vendorData);
  };

  return (
    <Card
      className="p-4 shadow-lg mt-4 container"
      style={{ maxWidth: "600px" }}
    >
      <h3 className="mb-3 text-center">Vendor Profile</h3>
      <Form>
        {Object.keys(vendorData).map(
          (key) =>
            typeof vendorData[key] == "string" && (
              <Form.Group className="mb-3" key={key}>
                <Form.Label className="fw-bold">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </Form.Label>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    name={key}
                    value={vendorData[key]}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control-plaintext">{vendorData[key]}</p>
                )}
              </Form.Group>
            )
        )}
      </Form>
      <div className="text-center">
        {isEditing ? (
          <Button variant="success" onClick={handleSave} className="me-2">
            Save
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
      </div>
    </Card>
  );
};

export default VendorProfile;
