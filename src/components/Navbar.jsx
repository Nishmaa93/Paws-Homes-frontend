// import React from 'react';
// import { FaHome, FaPaw, FaUser, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
// import officiallogo from "../assets/officiallogo.png";
// import './navbar.css';
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {
//   const navigate = useNavigate();

//   // Get user data
//   const user = JSON.parse(localStorage.getItem('user'));

//   // Log out function
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//     <>
//       <nav className="navbar navbar-light fixed-top p-2" style={{ backgroundColor: '#AC8968' }}>
//         <div className="container-fluid px-3">
//           <Link className="navbar-brand d-flex align-items-center" to="/">
//             <img src={officiallogo} alt="Logo" width="24" height="24" className="d-inline-block align-text-top me-2" />
//             <span className="font-weight-bold">AdoptAPet</span>
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="offcanvas offcanvas-end text-bg-light narrow-sidebar" tabIndex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbarLabel">
//             <div className="offcanvas-header" style={{ backgroundColor: '#ac8968'}}>
//               <h5 className="offcanvas-title" id="offcanvasLightNavbarLabel" style={{ fontWeight: 'bold', fontFamily: 'Times New Roman, Times, serif' }}>Menu</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div className="offcanvas-body" style={{ backgroundColor: '#ac8968'}}>
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link active d-flex align-items-center" aria-current="page" to="/dashboard" style={{ fontWeight: 'bold' }}>
//                     <FaHome className="me-2" /><span>Home</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link d-flex align-items-center" to="/pets-category" style={{ fontWeight: 'bold' }}>
//                     <FaPaw className="me-2" /><span>All Pets</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link d-flex align-items-center" to="/mail" style={{ fontWeight: 'bold' }}>
//                     <FaEnvelope className="me-2" /><span>Mail</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link d-flex align-items-center" to={`/profile/${user.id}`} style={{ fontWeight: 'bold' }}>
//                     <FaUser className="me-2" /><span>Profile</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link onClick={handleLogout} className="nav-link d-flex align-items-center" to="/" style={{ fontWeight: 'bold' }}>
//                     <FaSignOutAlt className="me-2" /><span>Logout</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// Navbar.jsx
// import React from 'react';
// import { FaHome, FaPaw, FaShower } from 'react-icons/fa';
// import officiallogo from "../assets/logo1-removebg-preview.png";
// import './navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar fixed-top p-2 d-flex align-items-center" style={{ backgroundColor: '#f7e7a3' }}>
//         <div className="container-fluid d-flex justify-content-between align-items-center">
//           {/* Logo */}
//           <div className="d-flex align-items-center">
//             <img src={officiallogo} alt="Logo" width="50" height="40" className="me-3" />
//             <span className="navbar-brand">Paws & Homes</span>
//           </div>

//           {/* Navigation Links */}
//           <div className="d-flex justify-content-evenly w-50">
//             {/* Home */}
//             <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/">
//               <FaHome size={20} />
//               <span>Home</span>
//             </Link>

//             {/* All Pets */}
//             <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/pets-category">
//               <FaPaw size={20} />
//               <span>All Pets</span>
//             </Link>

//             {/* Pet Grooming */}
//             <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/pet-grooming">
//               <FaShower size={20} />
//               <span>Pet Grooming</span>
//             </Link>
//           </div>

//           {/* Hamburger Menu */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         {/* Offcanvas Menu */}
//         <div
//           className="offcanvas offcanvas-end"
//           tabIndex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <div className="offcanvas-header" style={{ backgroundColor: '#f7e7a3' }}>
//             <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/pets-category">
//                   All Pets
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/pet-grooming">
//                   Pet Grooming
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// Navbar.jsx
import React from 'react';
import { FaEnvelope, FaHome, FaPaw, FaShower, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import officiallogo from "../assets/logo1-removebg-preview.png";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top p-2 d-flex align-items-center" style={{ backgroundColor: '#f7e7a3' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/dashboard" className="d-flex align-items-center">
            <img src={officiallogo} alt="Logo" width="50" height="40" className="me-3" />
            <span className="navbar-brand">Paws & Homes</span>
          </Link>

          {/* Navigation Links */}
          <div className="d-flex justify-content-evenly w-50">
            {/* Home */}
            <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/dashboard">
              <FaHome size={20} />
              <span>Home</span>
            </Link>

            {/* All Pets */}
            <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/pets-category">
              <FaPaw size={20} />
              <span>All Pets</span>
            </Link>

            {/* Pet Grooming */}
            <Link className="nav-link d-flex flex-column align-items-center mx-2" to="/pet-grooming">
              <FaShower size={20} />
              <span>Pet Grooming</span>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header" style={{ backgroundColor: '#f7e7a3' }}>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              {/* Mail */}
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/mail">
                  <FaEnvelope className="me-2" />
                  <span>Mail</span>
                </Link>
              </li>
              {/* Profile */}
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/profile/profile">
                  <FaUser className="me-2" />
                  <span>Profile</span>
                </Link>
              </li>
              {/* Logout */}
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/logout">
                  <FaSignOutAlt className="me-2" />
                  <span>Logout</span>
                </Link>


              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

