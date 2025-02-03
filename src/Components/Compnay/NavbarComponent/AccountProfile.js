// import React from "react";
// import { useSelector } from "react-redux";

// export default function AccountProfile() {
//  const { isLoggedIn, data } = useSelector((state) => state.logged);
//   return (
//     <>
//       {isLoggedIn && <h1>{data.name}</h1>}
//       <p>this is company name</p>
//     </>
//   );
// }
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const VendorProfile = () => {
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
    companyAddress: "123, Industrial Area, Mumbai",
  });

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
        {Object.keys(vendorData).map((key) => (
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
        ))}
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
