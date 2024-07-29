// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Logout } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(
    path === "/adminpanel"
  );

  useEffect(() => {
    setDisplay(path === "/adminpanel")
  },[path]);

  const handleAdminLogout = () => {
    setDisplay(false);
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Feedback Portal
      </Link>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/listfeedback">
              FeedBacks
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/adminlogin">
              Admin
            </Link>
          </li>
        </ul>
        {display && (
          <Button onClick={handleAdminLogout} className="ms-lg-3 mt-2 mt-lg-0">
            <Logout /> Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Header;
