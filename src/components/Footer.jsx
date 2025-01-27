import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.css'; // Import the CSS for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Explore Section */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>
              <i className="fas fa-info-circle"></i>{' '}
              <Link to="/about-us" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <i className="fas fa-user"></i>{' '}
              <Link to="/profile" className="footer-link">
                Profile
              </Link>
            </li>
            <li>
            <i className="fas fa-home"></i>{' '}
              <Link to="/dashboard" className="footer-link">
                Home
              </Link>
            </li>
            <li>
            <i className="fas fa-paw"></i>{' '}
              <Link to="/pets-category" className="footer-link">
                Pets
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +977 9876543210
            </li>
            <li>
              <i className="fas fa-envelope"></i> nishma@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Kapan, Aakasheydhara
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
