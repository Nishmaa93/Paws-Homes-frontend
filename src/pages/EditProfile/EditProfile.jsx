import React, { useState } from "react";
import { FaCamera, FaSave, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    fullname: "",
    email: "",
    phonenumber: "",
  };
  const storedProfileImage = localStorage.getItem("profileImage");

  const [userData, setUserData] = useState(storedUser);
  const [profileImage, setProfileImage] = useState(storedProfileImage || "");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Profile updated successfully!");
    navigate("/profile/Profile");
  };

  return (
    <div className="edit-profile-container">
      <button className="back-button" onClick={() => navigate('/profile')}>
        <FaArrowLeft /> Back to Profile
      </button>

      <div className="edit-profile-card">
        <div className="profile-image-container">
          <img
            src={profileImage || "https://via.placeholder.com/120"}
            alt="Profile"
            className="profile-image"
          />
          <label className="upload-icon">
            <FaCamera className="camera-icon" />
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="edit-profile-form">
          <label>Full Name:</label>
          <input type="text" name="fullname" value={userData.fullname} onChange={handleChange} />

          <label>Phone Number:</label>
          <input type="tel" name="phonenumber" value={userData.phonenumber} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />

          <button className="save-button" onClick={handleSaveProfile}>
            <FaSave /> Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
