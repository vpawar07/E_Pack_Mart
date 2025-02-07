import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, search, Togg } from "./Redux/slice";
import { Link, useNavigate } from "react-router-dom";
import ComNavbar from "./Compnay/CompanyDashboard/ComNavbar";
import AdminNavbar from "./AdminDashboard/AdminNavbar";
import Menu from "./Menu/Menu";

// name: "logged",

//   initialState: {
//     isLoggedIn: false,
//     data: {},
//     searchData: "",
//     toggle: false,
//   },

const Navbar = () => {
  const { isLoggedIn, data, toggle } = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    dispatch(logout({}));
    navigate("/");
    dispatch(Togg(false));
  };
  //

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("e.target.tri", e.target.value.trim());
    dispatch(search(e.target.value.trim()));
    // }
  };
  let roll = data?.role_id?.role_id ?? data?.user_id?.role_id?.role_id;
  console.log("BalajiRole ", roll);
  let pathh;
  let compo;
  console.log("compo1", compo);
  if (roll == 2) {
    pathh = "/companyDashboard";
    compo = <ComNavbar />;
  } else if (roll == 1) {
    pathh = "/adminDashboard";
    compo = <AdminNavbar />;
  } else if (roll == 3) {
    pathh = "/customerDashboard";
  } else {
    pathh = "/";
  }
  console.log("compo2", compo);

  console.log("pathh", pathh);

  // let [toggle, setToggle] = useState(false);
  return (
    <>
      {/* {isLoggedIn && data.role_id.role_type != 1 &&  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to={pathh}>
            <img
              src="https://via.placeholder.com/50" // Replace with your actual logo URL
              alt="Epackmart"
              id="top"
              style={{ height: "40px", marginRight: "10px" }}
            />
            Epackmart
          </Link>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ position: "relative" }}
          >
            <ul className="navbar-nav ms-auto align-items-center">
              {/*  Customer Navbar Components  */}
              {![1, 2].includes(
                data?.role_id?.role_id ?? data?.user_id?.role_id?.role_id
              ) ? (
                <>
                  {/* Search Bar */}
                  <li className="nav-item d-flex">
                    <form onSubmit={handleSearch} className="d-flex">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter product / service to search"
                        onChange={(e) => handleSearch(e)}
                        style={{ width: "300px" }}
                      />
                    </form>
                  </li>

                  <li className="nav-item">
                    <button className="btn btn-outline-light ms-2">Cart</button>
                  </li>
                </>
              ) : null}

              {/*  Customer Navbar Components  */}

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
                  {compo}
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-light nav-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="btn btn-outline-light"
                      onClick={() => dispatch(Togg(!toggle))}
                    >
                      {data.name ?? data.user_id.name}
                    </button>
                  </li>
                </>
              )}
            </ul>
            {toggle && (
              <div style={{ position: "absolute", top: "50px", right: "18%" }}>
                <Menu toggle={toggle} />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* {
        isLoggedIn &&
          (() => {
            const roleId =
              data?.role_id?.role_id ?? data?.user_id?.role_id?.role_id;

            if (roleId === 2) {
              return <CompanyDashboard />;
            } else if (roleId === 3) {
              return <CustomerDash />;
            } else if (roleId === 1) {
              return <AdminDashboard />;
            } else {
              return null;
            }
          })() // Immediately invoked function expression (IIFE)
      } */}
    </>
  );
};

export default Navbar;
