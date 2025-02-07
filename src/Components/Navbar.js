import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, search } from "./Redux/slice";
import { Link, useNavigate } from "react-router-dom";
import CompanyDashboard from "./Compnay/CompanyDashboard/CompDash";
import CustomerDash from "./Customer/CustomerDashboard/CustomerDash";

const Navbar = () => {
  const { isLoggedIn, data } = useSelector((state) => state.logged);
  // console.log("User roleId: ", data.role_id.role_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  //

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("serachQuery", searchQuery);
    // if (e.target.value.trim().length > 3) {
    dispatch(search(e.target.value.trim()));
    // }
  };

  return (
    <>
      {/* {isLoggedIn && data.role_id.role_type != 1 &&  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://via.placeholder.com/50" // Replace with your actual logo URL
              alt="Epackmart"
              style={{ height: "40px", marginRight: "10px" }}
            />
            Epackmart
          </Link>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {data?.role_id?.role_id != 1 ? (
                <>
                  {/* Dropdown for "All India" */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle text-light"
                      to="#"
                      id="locationDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All India
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/location/mumbai">
                          Mumbai
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/location/delhi">
                          Delhi
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/location/bangalore"
                        >
                          Bangalore
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Search Bar */}
                  <li className="nav-item d-flex">
                    <form onSubmit={handleSearch} className="d-flex">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter product / service to search"
                        onChange={(e) => {
                          handleSearch(e);
                        }}
                        style={{ width: "300px" }}
                      />
                      {/* <button type="submit" className="btn btn-success">
                  Search
                </button> */}
                    </form>
                  </li>

                  {/* Get Best Price button */}

                  <li className="nav-item">
                    <button className="btn btn-outline-light ms-2">
                      Get Best Price
                    </button>
                  </li>
                </>
              ) : null}

              {/* Conditional Login/Logout Functionality */}
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-light nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                  <li className="nav-item">{data.name}</li>
                </>
              )}
            </ul>

            {/* <li className="nav-item">
              <Link className="nav-link text-light" to="/CompanyDashboard">
              Dashboard
            </Link>
            </li> */}
          </div>
        </div>
      </nav>
      {
        isLoggedIn &&
          (data.role_id.role_id === 3 ? (
            <CustomerDash />
          ) : data.role_id.role_id === 2 ? (
            <CompanyDashboard />
          ) : null) // Default case (optional)
      }
    </>
  );
};

export default Navbar;
