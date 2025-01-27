import React, { useEffect, useState } from 'react';
import { deleteListing, getAllListings } from '../../apis/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import officiallogo from "../../assets/logo1-removebg-preview.png";
import { Link } from 'react-router-dom';
import { FaTrash, FaEye, FaPaw } from 'react-icons/fa';

const AdminDashboard = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllListings()
      .then(response => {
        if (response.data && Array.isArray(response.data.listings)) {
          setPets(response.data.listings);
        } else {
          toast.error('Unexpected response format from server.');
        }
        setLoading(false);
      })
      .catch(error => {
        toast.error("Failed to fetch pet data");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDialog = window.confirm("Are you sure you want to delete?");
    if (confirmDialog) {
      deleteListing(id).then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
          setPets(pets.filter(pet => pet._id !== id));
        }
      }).catch((error) => {
        toast.error("Error deleting listing");
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0d082' }}>
      <nav style={{ backgroundColor: '#e0d082' }} className="shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={officiallogo} alt="Logo" className="h-10 w-auto mr-3" />
              <span className="text-2xl font-bold text-black">Paws&Homes</span>
            </div>
            <Link
              to="/admin/addlisting"
              className="bg-black text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Add New Pet
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">All Pets</h1>
          <span className="text-lg font-semibold text-black bg-white px-3 py-1 rounded-full">
            Total: {pets.length}
          </span>
        </div>

        <div className="grid grid-cols-responsive gap-6">
          {pets.map(pet => (
            <div key={pet._id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 transition duration-300 hover:shadow-xl">
              <img
                src={`http://localhost:5500/listings/${pet.petImage}`}
                alt={pet.petName}
                className="w-64 h-64 object-contain"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black mb-2">{pet.petName}</h2>
                <p className="text-sm text-black mb-3 flex items-center">
                  <FaPaw className="mr-2" /> {pet.breed}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/admin/updatelisting/${pet._id}`}
                    className="flex items-center px-3 py-2 rounded"
                    style={{ backgroundColor: '#e0d082', color: 'black' }}
                  >
                    <FaEye className="mr-2" /> View
                  </Link>
                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
