// Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBriefcase,
  FaCogs,
  FaLeaf,
  FaHome,
  FaEnvelope,
} from "react-icons/fa"; // Import the icons
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
              Address: P2 ELOB Office No E 30 F 23,
              <br />
              Hamriyah Free Zone, Sharjah, UAE
              <br />
              Tel: +971-6-5307996 <br />
              Email: info@internationalagora.com
            </span>
          </div>
          <div className="flexColEnd f-right">
            <div className="flexColEnd f-menu">
              <Link to="/" className="navbar-link">
                <FaHome /> Home
              </Link>
              <Link to="/about" className="navbar-link">
                <FaUser /> Who we are?
              </Link>
              <Link to="/product" className="navbar-link">
                <FaCogs /> Product & Services
              </Link>
              <a
                href="mailto:info@internationalagora.com"
                className="navbar-link"
              >
                <FaEnvelope /> Contact
              </a>
              <Link to="/careers" className="navbar-link">
                <FaBriefcase /> Careers
              </Link>
              <Link to="/businessPractices" className="navbar-link">
                <FaLeaf />
                Business Practices{" "}
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
