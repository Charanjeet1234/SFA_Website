import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">

        {/* Logo */}
        {!menuOpen && (
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img
              src={assets.logo}
              alt="SFA Logo"
              className="logo"
            />
          </Link>
        )}

        {/* Hamburger / Close Button */}
        <button
          type="button"
          className={`navbar-toggler ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#BusinessActivity" onClick={closeMenu}>
            Business Activity
          </a>

          <a href="#footer" onClick={closeMenu}>
            Contact Us
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;