import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllListings } from '../../apis/Api';
import steps from "../../assets/steps1.png";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./dashboard.css";

const Dashboard = () => {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    const handleNavigateToListings = () => {
        navigate('/pets-category');
    };

    useEffect(() => {
        getAllListings()
            .then(response => {
                console.log('API response:', response.data);
                if (response.data && Array.isArray(response.data.listings)) {
                    setPets(response.data.listings);
                } else {
                    console.error('Expected an array but got:', response.data);
                    toast.error('Unexpected response format from server.');
                }
            })
            .catch(error => {
                toast.error("Failed to fetch pet data");
                console.error("There was an error fetching the pet data!", error);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="dashboard-body">
                <main className="container-fluid p-0">
                    <div className="hero-section mb-6">
                        <h1 className='Heading-text'>Where paws meets home and forever begins</h1>
                        <div className="search-section mb-4">
                            <div className="input-group custom-input-group">
                                <input type="text" className="form-control custom-search-input" placeholder="Search Breed, Size etc.." />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary custom-search-button" type="button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            <h4>Browse from various pet choices</h4>
                            <div className="btn-container">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className="btn btn-secondary custom-btn"><i className="fas fa-dog"></i> Dogs</motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" className="btn btn-secondary custom-btn"><i className="fas fa-cat"></i> Cats</motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleNavigateToListings} type="button" className="btn btn-secondary custom-btn"><i className="fas fa-paw"></i> All Pets</motion.button>
                            </div>
                        </div>
                    </div>

                    <div className="image-section text-center">
                        <h2 className="Heading-text">How it works</h2>
                        <img src={steps} alt="Adoption Steps" className="img-fluid" />
                    </div>

                    <div className="pets-section container">
                        <h2 className="text-center Heading-text">Pets Available for Adoption</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-4">
                            {pets.slice(0, 4).map(pet => (
                                <div key={pet.id} className="col mb-4">
                                    <div className="card h-100 custom-card">
                                        <img 
                                            src={`http://localhost:5500/listings/${pet.petImage}`} 
                                            className="card-img-top custom-card-img" 
                                            alt={pet.petName} 
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{pet.petName}</h5>
                                            <p className="card-text">{pet.petType}</p>
                                            <Link
                                                to={`/pet_details/${pet._id}`}
                                                className="btn btn-custom"
                                            >
                                                Browse Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                <section className="bg-#AC8968">
                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-black xl:text-3xl">
                            Want to donate to our furbabies???
                        </h2>
                        <p className="max-w-4xl mt-6 text-center text-black">
                            Donating to Paws & Homes directly helps improve the lives of homeless animals by funding their care, shelter, and medical treatment. Your contribution not only supports the platform in connecting pets with loving families but also ensures that every pet receives the necessary resources until they find their forever home. By donating, you are becoming a part of a compassionate community dedicated to giving these animals a second chance at life and happiness.
                        </p>
                        <div className="inline-flex w-full mt-6 sm:w-auto">
                            <a
                                href="/donation"
                                className="inline-flex items-center justify-center w-full px-6 py-2 rounded-lg"
                                style={{ backgroundColor: '#E0D082', color: 'black' }}
                            >
                                Donate
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
