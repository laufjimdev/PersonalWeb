import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar fixed-top navbar-light bg-light px-3 py-2 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to={"/"} onClick={closeMenu}>
          <span role="img" aria-label="map" className="me-2">🗺️</span>
          <strong>Travel Chronicles</strong>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse px-3 ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/2022"} onClick={closeMenu}>2022</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/2023"} onClick={closeMenu}>2023</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/2024"} onClick={closeMenu}>2024</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
