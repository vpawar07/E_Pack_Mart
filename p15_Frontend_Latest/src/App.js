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
<<<<<<< HEAD
import Header from "./Components/Header";
import SignInSignUpBtn from "./Components/ReusableComponent/SignInSignUp_btn";
=======
>>>>>>> 15f1280bebeebd8753eef92c627eaee6a649f1be

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
<<<<<<< HEAD
=======
            
>>>>>>> 15f1280bebeebd8753eef92c627eaee6a649f1be
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
      </Routes>
<<<<<<< HEAD
      <SignInSignUpBtn />
      <Header />
=======
>>>>>>> 15f1280bebeebd8753eef92c627eaee6a649f1be
    </div>
  );
};

export default App;
