import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
// import AccountProfile from "../NavbarComponent/AccountProfile";
import AccountProfile from "./Components/Compnay/NavbarComponent/AccountProfile";
import AddProduct from "./Components/Compnay/NavbarComponent/AddProduct";
import OrderManagement from "./Components/Compnay/NavbarComponent/OrderManagement";
import Notifications from "./Components/Compnay/NavbarComponent/Notifications";
import CustomerFeedback from "./Components/Compnay/NavbarComponent/CustomerFeedback";
import SupportComponent from "./Components/Compnay/NavbarComponent/SupportComponent";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/CompanyDashboard" element={<CompanyDashboard />} /> */}
        <Route path="/" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/manage-orders" element={<OrderManagement />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/feedback" element={<CustomerFeedback />} />
        <Route path="/support" element={<SupportComponent />} />
        <Route path="/comPro" element={<AccountProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
