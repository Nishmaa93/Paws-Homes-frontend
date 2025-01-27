import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './AboutUs.css';
import DogImage from '../../assets/pets.png';


const AboutUs = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="about-us-page content-wrapper">
        <section className="about-section">
          <div className="about-header">
            <i className="icon">ℹ️</i>
            <h1>About us</h1>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                At Paws & Homes, we are passionate about creating a world where every pet finds a loving home and every
                animal receives the care they deserve. Our platform bridges the gap between kind-hearted adopters and
                shelters, ensuring that every adoption is as seamless as possible. We also provide tools for donations
                and services like pet grooming to support animal welfare holistically.
              </p>
              <p>
                Our mission is simple: to transform the pet adoption process into a compassionate, accessible, and
                efficient experience. We work closely with shelters, animal welfare advocates, and pet enthusiasts to
                create a space where adopters can find their perfect companions, while also contributing to the broader
                cause of animal care through donations and support.
              </p>
              <p>
                Whether you're adopting a pet, booking services for your furry friend, or making a difference through
                donations, Paws & Homes is your partner in creating lasting bonds with animals. Together, let’s give
                pets the love and care they truly deserve.
              </p>
            </div>
            <div className="about-images">
              <img src={DogImage} alt="Dog" className="dog-image" />
              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
