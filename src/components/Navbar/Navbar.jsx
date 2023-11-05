// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";
import { motion } from "framer-motion";

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
        <Link to="/" className="navbar-link">
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
              Business Practices
            </Link>
            <Link to="/careers" className="navbar-link">
              Careers
            </Link>
            <Link to="/product" className="navbar-link">
              Product & Services
            </Link>
            <Link to="/about" className="navbar-link">
              Who we are?
            </Link>
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <a href="mailto:shakibvakili@gmail.com">
              {" "}
              <button className="button">Contact</button>
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
