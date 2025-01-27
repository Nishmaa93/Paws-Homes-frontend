import React, { useState, useEffect } from 'react';
import './pet_details.css';
import { useParams, Link } from 'react-router-dom';
import { getoneListing } from '../../apis/Api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'; // Import Footer component
import { Dog, Ruler, Syringe, Info, Heart, User } from 'lucide-react';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await getoneListing(id);
        setPet(response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#E0D082] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-4">
              <img 
                className="w-full h-64 object-contain rounded-lg" 
                src={`http://localhost:5500/listings/${pet.petImage}`} 
                alt={pet.petName} 
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-black mb-4">{pet.petName}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Dog className="text-black mr-2" size={20} />
                  <span className="text-black">{pet.petType}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-black mr-2" size={20} />
                  <span className="text-black">{pet.breed}</span>
                </div>
                <div className="flex items-center">
                  <User className="text-black mr-2" size={20} />
                  <span className="text-black">
                    {pet.gender} {pet.gender.toLowerCase() === 'male' ? '♂' : '♀'}
                  </span>
                </div>
                <div className="flex items-center">
                  <Ruler className="text-black mr-2" size={20} />
                  <span className="text-black">{pet.size}</span>
                </div>
                <div className="flex items-center">
                  <Syringe className="text-black mr-2" size={20} />
                  <span className="text-black">{pet.vaccination ? 'Vaccinated' : 'Not Vaccinated'}</span>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-black mb-2 flex items-center">
                  <Info className="text-black mr-2" size={20} />
                  About {pet.petName}
                </h2>
                <p className="text-black">{pet.aboutPet}</p>
              </div>
              <Link 
                to={`/application/${pet._id}`} 
                className="btn btn-custom"
                style={{ backgroundColor: '#E0D082', color: 'black' }}
              >
                Apply to Adopt {pet.petName}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </>
  );
};

export default PetDetails;
