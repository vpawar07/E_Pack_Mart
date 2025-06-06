import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminNavbar1 = () => {
  const adminData = useSelector((state) => state.logged.data);

  return (
    <h1>Admin</h1>
    // <>
    //   {" "}
    //   <h1>Admin</h1>

    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       {/* Logo and Admin Name */}
    //       <a className="navbar-brand" href="/">
    //         <img
    //           src="https://via.placeholder.com/40"
    //           alt="Admin Logo"
    //           className="me-2"
    //           style={{ borderRadius: "50%" }}
    //         />
    //         <span>{adminData.name}</span>
    //       </a>

    //       {/* Collapsible menu button for smaller screens */}
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#adminNavbarContent"
    //         aria-controls="adminNavbarContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       {/* Navbar Links */}
    //       <div className="collapse navbar-collapse" id="adminNavbarContent">
    //         <ul className="navbar-nav ms-auto">
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/admin-dashboard">
    //               Dashboard
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/manage-users">
    //               Manage Users
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/approve-vendors">
    //               Approve Vendors
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/manage-categories">
    //               Manage Categories
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/sales-reports">
    //               Sales Reports
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/send-notifications">
    //               Notifications
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/deactivate-accounts">
    //               Deactivate Fraudulent Accounts
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    // </>
  );
};

export default AdminNavbar1;
