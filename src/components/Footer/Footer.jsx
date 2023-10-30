// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="f-wrapper">
        <div className="innerWidth paddings flexCenter f-container">
          <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" className="footerImg"/>
            <span className="secondaryText">
              Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
            </span>
          </div>
          <div className="flexColEnd f-right">
            <div className="flexColEnd f-menu">
              <Link to="/about" className="navbar-link">
                About Us
              </Link>
              <Link to="/product" className="navbar-link">
                Product
              </Link>
              <Link to="/about" className="navbar-link">
                Tab 2
              </Link>
              <Link to="/about" className="navbar-link">
                Tab 3{" "}
              </Link>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <p className="line"></p>
        <div className="flexCenter f-end">
          <Link to="/privacyPolicy" className="navbar-link">
            Privacy Policy
          </Link>
          <Link to="/termsOfService" className="navbar-link">
            Terms of Service
          </Link>
          <p className="navbar-link">&copy; 2023 Your Website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
