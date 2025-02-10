import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import AccountProfile from "./Components/Compnay/CompanyNavCompt/AccountProfile";
import AddProduct from "./Components/Compnay/CompanyNavCompt/AddProduct";
import OrderManagement from "./Components/Compnay/CompanyNavCompt/OrderManagement";
import Notifications from "./Components/Compnay/CompanyNavCompt/Notifications";
import CustomerFeedback from "./Components/Compnay/CompanyNavCompt/CustomerFeedback";
import SupportComponent from "./Components/Compnay/CompanyNavCompt/SupportComponent";
import CompanyDashboard from "./Components/Compnay/CompanyDashboard/CompDash";
import AdminDashboard from "./Components/AdminDashboard/AdmDash";
import CustomerDash from "./Components/Customer/CustomerDashboard/CustomerDash";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Edit } from "./Components/Redux/slice";
import Header from "./Components/Footer";
import SignInSignUpBtn from "./Components/ReusableComponent/SignInSignUp_btn";
import AddCategory from "./Components/AdminDashboard/AddCategory";
import ManageCategory from "./Components/AdminDashboard/ManageCategory";
import AddProductType from "./Components/AdminDashboard/AddProductyType";

import Cart from "./Components/Customer/CustomerDashboard/MyCart";
import Payment from "./Components/Customer/CustomerDashboard/Payment";
import ProductDetails from "./Components/ProductDetails";
import MyOrders from "./Components/Customer/CustomerDashboard/MyOrders";

const App = () => {
  let [isModel, setModel] = useState(false);
  let { isEdit } = useSelector((state) => state.logged);
  console.log("isEdit ", isEdit);
  let dispatch = useDispatch();
  useEffect(() => {
    setModel(isEdit);
  }, [isEdit]);
  return (
    <div>
      <Navbar />
      {isModel && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100dvw",
            height: "100dvh",
            paddingTop: "70px",
            zIndex: "5",

            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "60%",
              height: "90%",
              backgroundColor: "White",
              margin: "auto",
              position: "relative",
            }}
          >
            <button
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => {
                dispatch(Edit());
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
        <Route path="/companyDashboard" element={<CompanyDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/customerDashboard" element={<CustomerDash />} />
        <Route path="/manage-category" element={<ManageCategory />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-product" element={<AddProductType />} />

        <Route path="/myCart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/product-details" element={<ProductDetails/>} />
        <Route path="/myOrders" element={<MyOrders/>}/>
      </Routes>

      {/* <SignInSignUpBtn /> */}
      <Header />
    </div>
  );
};

export default App;
