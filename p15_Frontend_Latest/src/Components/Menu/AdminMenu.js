import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slice";

const AdminMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout({}));
    navigate("/");
  };

  return (
    <div className="dropdown-menu show p-3 shadow rounded">
      <h6 className="dropdown-header text-white bg-primary text-center">
        Admin Menu
      </h6>
      <button className="dropdown-item" onClick={() => navigate("/manage-profile")}>
        Manage Profile
      </button>
      <button className="dropdown-item text-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminMenu;
