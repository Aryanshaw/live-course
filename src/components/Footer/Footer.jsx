import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Sri chaitanya</h2>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <br />
          <ul>
            <li>
              <span href="#">Home</span>
            </li>
            <li>
              <span href="#">About</span>
            </li>
            <li>
              <span href="#">Services</span>
            </li>
            <li>
              <span href="#">Contact</span>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <br />
          <ul>
            <li>
              <span href="#">Home</span>
            </li>
            <li>
              <span href="#">About</span>
            </li>
            <li>
              <span href="#">Services</span>
            </li>
            <li>
              <span href="#">Contact</span>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us:</p>
          <p>Email: info@aryan.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
