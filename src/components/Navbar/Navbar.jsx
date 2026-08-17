// import React from "react";
// import { assets } from "../../assets/assets";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// function Navbar() {
//   return (
//     <>
//       {/* <div className="Navbar">
//         <Link to="/">
//           <img src={assets.logo} alt="company_Logo" className="logo" />
//         </Link>
//         <ul className="Navbar-menu">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#products">Products</a>
//           </li>
//           <li>
//             <a href="#BusinessActivity">Business Activity</a>
//           </li>
//           <li>
//             <a href="#footer">Contact Us</a>
//           </li>
//         </ul>
//       </div> */}

//       <nav className="navbar navbar-expand-lg p-2">
//         <div className="container-fluid">
//           {/* Logo aligned to the left */}
//           <Link className="navbar-brand" to="/">
//             <img src={assets.logo} alt="company_Logo" className="logo" />
//           </Link>
//           {/* Navbar toggle button for mobile view */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             justify-content="center"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           {/* Links aligned to the right */}
//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#products">
//                   Products
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#BusinessActivity">
//                   Business Activity
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#footer">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

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