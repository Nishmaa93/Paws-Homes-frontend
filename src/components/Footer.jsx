// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import './Footer.css'; // Import the CSS for styling the footer

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Explore Section */}
//         <div className="footer-section">
//           <h3>Explore</h3>
//           <ul>
//             <li>
//               <i className="fas fa-info-circle"></i>{' '}
//               <Link to="/about-us" className="footer-link">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <i className="fas fa-user"></i>{' '}
//               <Link to="/profile" className="footer-link">
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <i className="fas fa-home"></i>{' '}
//               <Link to="/dashboard" className="footer-link">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <i className="fas fa-paw"></i>{' '}
//               <Link to="/pets-category" className="footer-link">
//                 Pets
//               </Link>
//             </li>
//             <li>
//               <i className="fas fa-question-circle"></i>{' '}
//               <Link to="/help" className="footer-link">
//                 Help
//               </Link>
//             </li>
//           </ul>
//         </div>
//         {/* Contact Us Section */}
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <ul>
//             <li>
//               <i className="fas fa-phone"></i> +977 9876543210
//             </li>
//             <li>
//               <i className="fas fa-envelope"></i> nishma@gmail.com
//             </li>
//             <li>
//               <i className="fas fa-map-marker-alt"></i> Kapan, Aakasheydhara
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Footer.css'; // CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-[#E0D082] text-black">
      <div className="footer-container flex flex-wrap justify-between items-start px-8 py-6">
        {/* Explore Section */}
        <div className="footer-section">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-info-circle footer-icon"></i>{' '}
              <Link to="/about-us" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <i className="fas fa-user footer-icon"></i>{' '}
              <Link to="/profile/profile" className="footer-link">
                Profile
              </Link>
            </li>
            <li>
              <i className="fas fa-home footer-icon"></i>{' '}
              <Link to="/dashboard" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <i className="fas fa-paw footer-icon"></i>{' '}
              <Link to="/pets-category" className="footer-link">
                Pets
              </Link>
            </li>
            <li>
              <i className="fas fa-question-circle footer-icon"></i>{' '}
              <Link to="/help" className="footer-link">
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-phone footer-icon"></i>{' '}
              <span className="footer-text">+977 9876543210</span>
            </li>
            <li>
              <i className="fas fa-envelope footer-icon"></i>{' '}
              <span className="footer-text">nishma@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt footer-icon"></i>{' '}
              <span className="footer-text">Kapan, Aakasheydhara</span>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-socials flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter social-icon"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-4 border-t border-[#d4c074]">
        <p className="footer-text text-sm">
          © {new Date().getFullYear()} Paws & Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

