import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section text-white text-center py-5">
      <div className="container">
        <h3 className="footer-title mb-3">Travel Chronicles</h3>
        <p className="footer-desc mb-4 px-3">
           Years of wanderlust captured through stories and photographs. Each journey a chapter in the endless book of discovery.
        </p>

        <ul className="footer-nav list-unstyled d-flex justify-content-center gap-4 mb-4 flex-wrap">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/2022'}>2022</Link></li>
          <li><Link to={'/2023'}>2023</Link></li>
          <li><Link to={'/2024'}>2024</Link></li>
        </ul>

        <hr className="footer-line my-4" />

        <p className="footer-signature">Made with ❤️ for wanderers everywhere by LauraDev</p>
      </div>
    </footer>
  );
};

export default Footer;
