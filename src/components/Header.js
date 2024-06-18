// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <Link className="navbar-brand" to="/">
      Feedback Portal
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/submit-feedback">
            Submit Feedback
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view-feedback">
            View Feedback
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reports">
            Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
