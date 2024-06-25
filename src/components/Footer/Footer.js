import React from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import './Footer.css';

const Footer = () => (
  <footer className="bg-dark text-white text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Feedback Management Portal</h5>
          <p>
            This portal is dedicated to collecting and managing feedback to
            improve our services. Your feedback is valuable to us.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Submit Feedback
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                View Feedback
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Contact Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@feedbackportal.com" className="text-white">
                info@feedbackportal.com
              </a>
            </li>
            <li>
              <a href="tel:+912345678901" className="text-white">
                +91 2345 678 901
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2024 Feedback Management Portal
    </div>
  </footer>
);

export default Footer;
