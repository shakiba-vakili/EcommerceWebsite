// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBriefcase,
  FaCogs,
  FaLeaf,
  FaHome,
  FaEnvelope,
} from "react-icons/fa"; // Import the icons

function Navbar() {
  const [menuOpened, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <nav className="n-wrapper">
      <div className="n-container paddings innerWidth flexCenter">
        <Link to="/">
          <motion.img
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="logoImg"
            src="./logo.png"
            alt="logo"
          />{" "}
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter n-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/businessPractices" className="navbar-link">
              <FaLeaf />
              Business Practices
            </Link>
            <Link to="/careers" className="navbar-link">
              <FaBriefcase /> Careers
            </Link>
            <Link to="/product" className="navbar-link">
              <FaCogs /> Product & Services
            </Link>
            <Link to="/about" className="navbar-link">
              <FaUser /> Who we are?
            </Link>
            <Link to="/" className="navbar-link">
              <FaHome /> Home
            </Link>
            <a href="mailto:info@internationalagora.com">
              {" "}
              <button className="button">
                {" "}
                <FaEnvelope /> Contact
              </button>
            </a>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
