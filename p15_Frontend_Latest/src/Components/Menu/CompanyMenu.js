import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slice";

const CompanyMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout({}));
    navigate("/");
  };

  return (
    <div className="dropdown-menu show p-3 shadow rounded">
      <h6 className="dropdown-header text-white bg-warning text-center">
        Company Menu
      </h6>
      <button className="dropdown-item" onClick={() => navigate("/comPro")}>
        Manage Profile
      </button>
      <button
        className="dropdown-item"
        onClick={() => navigate("/notification")}
      >
        Notification
      </button>
      <button className="dropdown-item" onClick={() => navigate("/support")}>
        Support
      </button>
      <button className="dropdown-item text-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default CompanyMenu;
