import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    petType: '',
    petName: '',
    breed: '',
    date: '',
    time: '',
    isAggressive: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="application-container">
        <div className="application-box">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <input
                type="text"
                name="petType"
                placeholder="Pet Type"
                value={formData.petType}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="petName"
                placeholder="Pet Name"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="breed"
                placeholder="Breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="time"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="isAggressive"
                placeholder="Is the pet aggressive?"
                value={formData.isAggressive}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
        </div>
        {showPopup && <div className="popup">Application Submitted Successfully!</div>}
      </div>
      <Footer />
    </>
  );
};

export default ApplicationForm;
