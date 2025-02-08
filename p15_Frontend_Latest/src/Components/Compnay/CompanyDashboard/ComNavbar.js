import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const ComNavbar = () => {
  const data = useSelector((state) => state.logged.data);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/addProduct">
                Add Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manage-orders">
                Manage Orders
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="notification">
                Notifications
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="feedback">
                Customer Feedback
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="support">
                Support
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ComNavbar;
