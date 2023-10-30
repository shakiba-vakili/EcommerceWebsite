// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";
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
          <img className="logoImg" src="./logo.png" alt="logo"/>{" "}
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter n-menu" style={getMenuStyles(menuOpened)}>
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
              <button className="button">Contact</button>
            </Link>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
