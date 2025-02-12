import React from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
import ProductList from "../../ProductList";
import MyCart from "./MyCart"
import Payment from "./Payment";

// import React from "react";
// import ProductList from "../../ProductList";

export default function CustomerDash() {

  const location = useLocation();

  return (
    <div>
      <ProductList />

      {/* <h1>This is customer dashboard</h1> */}
      {/* {location.pathname === "/CustomerDashboard" && <ProductList />} */}
      <Routes>
        {/* <Route path="/myCart" element={<MyCart/>} /> */}
        {/* <Route path="/myCart" element={<MyCart/>}/> */}
        {/* <Route path="/payment" element={<Payment/>}/> */}
      </Routes>
    </div>
  );
}
