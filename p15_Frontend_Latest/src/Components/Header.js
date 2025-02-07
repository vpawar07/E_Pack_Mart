import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "grey",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <a href="#top" style={{ margin: "10" }}>
          Back to top
        </a>
      </div>
      <header
        style={{
          backgroundColor: "#2c3e50",
          position: "relative",
          bottom: 0,
          height: "300px",
          width: "100%",
          color: "white",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-2">
            {/* Logo */}
            <div className="logo">
              <span className="fs-4 fw-bold text-white">Epackmart</span>
            </div>

            {/* Navigation Links */}
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <div className="row w-100">
                  {/* Column 1: About Epackmart */}
                  <div className="col-md-3">
                    <h6 className="text-white mb-3">About Epackmart</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a className="nav-link" href="#about">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#careers">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Connect with Us */}
                  <div className="col-md-3">
                    <h6 className="text-white mb-3">Connect with Us</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a className="nav-link" href="#facebook">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#twitter">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#instagram">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#linkedin">
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Services */}
                  <div className="col-md-3">
                    <h6 className="text-white mb-3">Our Services</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a className="nav-link" href="#tracking">
                          Packaging Tracking
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#inventory">
                          Inventory Management
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4: Support */}
                  <div className="col-md-3">
                    <h6 className="text-white mb-3">Support</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a className="nav-link" href="#help">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#contact">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#faq">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            {/* User Actions */}
            <div className="user-actions">
              <a
                className="text-white text-decoration-none me-3"
                href="#account"
              >
                Your Account
              </a>
              <a className="text-white text-decoration-none" href="#help">
                Help
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
