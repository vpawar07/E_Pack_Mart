import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const ComNavbar = () => {
  const data = useSelector((state) => state.logged.data);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo and Company Name */}
        <a className="navbar-brand" href="/">
          <img
            src="https://via.placeholder.com/40"
            alt="Company Logo"
            className="me-2"
            style={{ borderRadius: "50%" }}
          />
          <span>{data.name}</span>
        </a>

        {/* Collapsible menu button for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/comPro">
                Account Profile
              </Link>
            </li> */}
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
