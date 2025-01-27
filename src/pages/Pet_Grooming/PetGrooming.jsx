import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './PetGrooming.css';

// Import images
import Step1 from '../../assets/image1.png';
import Step2 from '../../assets/image2.png';
import Step3 from '../../assets/image3.png';
import Step4 from '../../assets/image4.png';
import Step5 from '../../assets/image5.png';
import Step6 from '../../assets/image6.png';
import Step7 from '../../assets/image7.png';

import GroomingImage from '../../assets/pet grooming.png';

const PetGrooming = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pet-grooming-page content-wrapper">
        {/* Header */}
        <header className="text-center py-4">
          <h1>Pet Grooming</h1>
          <p>
          Pamper your furry friend with professional pet grooming! From shiny coats to trimmed nails, we ensure your pets look and feel their best. <br />
            
          Because every adopted pet deserves a fresh start!
          </p>
        </header>

        {/* How it Works Section */}
        <section className="how-it-works py-4">
          <h2 className="text-center">How it Works</h2>
          <div className="how-it-works-images d-flex justify-content-center">
            <img src={Step1} alt="Step 1" />
            <img src={Step2} alt="Step 2" />
            <img src={Step3} alt="Step 3" />
            <img src={Step4} alt="Step 4" />
            <img src={Step5} alt="Step 5" />
            <img src={Step6} alt="Step 6" />
            <img src={Step7} alt="Step 7" />
          </div>
        </section>

        {/* Schedule Grooming Section */}
        <section className="schedule-grooming py-4">
          <h2 className="text-center">Schedule Grooming</h2>
          <div className="schedule-grooming-content d-flex align-items-center justify-content-between">
            <p>Every adopted pet deserves a fresh start, and grooming plays a big part in that journey! <br/>
            Our grooming services are tailored to ensure your new furry friend is clean, healthy, and comfortable in their new home. <br/>
            From soothing baths to de-shedding, nail trims, and coat styling, we make sure your pet feels loved and cared for.<br/>
            A well-groomed pet is a happy pet, ready to shower you with unconditional love!</p>
            <img src={GroomingImage} alt="Grooming Illustration" />
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Book an Appointment</button>
          </div>
        </section>
        {/* Divider */}
        <div className="divider"></div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PetGrooming;
