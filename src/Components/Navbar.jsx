import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // force scroll to top if already on homepage
    }
  };

  return (
    
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light px-3 py-2 shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to={"/"} onClick={handleLogoClick}>
          <span role="img" aria-label="map" className="me-2">🗺️</span>
          <strong>Travel Adventures</strong>
        </Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/2022"}>2022</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/2023"}>2023</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/2024"}>2024</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
