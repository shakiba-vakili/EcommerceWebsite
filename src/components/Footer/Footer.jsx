// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <div className="f-wrapper">
        <div className="innerWidth paddings flexCenter f-container">
          <div className="flexColStart f-left">
            <Link to="/" className="navbar-link">
              <motion.img
                initial={{ x: "5rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                src="./logo2.png"
                className="footerImg"
                alt="logo"
              />{" "}
            </Link>
            <span className="secondaryTextGray ">
              Lorem ipsum dolor sit amet.
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
            </span>
          </div>
          <div className="flexColEnd f-right">
            <div className="flexColEnd f-menu">
              <Link to="/about" className="navbar-link">
                Who we are?
              </Link>
              <Link to="/product" className="navbar-link">
                Product & Services
              </Link>
              <a href="mailto:shakibvakili@gmail.com" className="navbar-link">
                Contact
              </a>
              <Link to="/careers" className="navbar-link">
                Careers
              </Link>
              <Link to="/businessPractices" className="navbar-link">
                Business Practices
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
