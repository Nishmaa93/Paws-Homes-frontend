import React, { useState, useEffect } from 'react';
import officiallogo from "../../assets/logo1-removebg-preview.png";
import { useParams } from 'react-router-dom';
import { getoneListing, updateListing } from '../../apis/Api';
import { toast } from 'react-toastify';
import { FaUpload } from 'react-icons/fa';

const UpdateListing = () => {
  const { id } = useParams();

  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [aboutPet, setAboutPet] = useState('');
  const [petImage, setPetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    getoneListing(id)
      .then((res) => {
        const listing = res.data;
        setPetName(listing.petName);
        setPetType(listing.petType);
        setBreed(listing.breed);
        setGender(listing.gender);
        setSize(listing.size);
        setAboutPet(listing.aboutPet);
        setPreviewImage(`http://localhost:5500/listings/${listing.petImage}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPetImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('petName', petName);
    formData.append('petType', petType);
    formData.append('breed', breed);
    formData.append('gender', gender);
    formData.append('size', size);
    formData.append('aboutPet', aboutPet);
    if (petImage) {
      formData.append('petImage', petImage);
    }

    updateListing(id, formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
        } else {
          toast.error('Something went wrong in front end');
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.message);
          } else if (error.response.status === 500) {
            toast.error('Internal server error');
          }
        } else {
          toast.error('No response!');
        }
      });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0d082' }}>
      <nav className="shadow-md" style={{ backgroundColor: '#e0d082' }}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={officiallogo} alt="Logo" className="h-8 w-auto mr-3" />
              <span className="text-xl font-bold" style={{ color: 'black' }}>Paws&Homes</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'black' }}>Update Pet Listing</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="petName" className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Pet Name
                </label>
                <input
                  type="text"
                  id="petName"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="petType" className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Pet Type
                </label>
                <select
                  id="petType"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Type</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </select>
              </div>
              <div>
                <label htmlFor="breed" className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Breed
                </label>
                <input
                  type="text"
                  id="breed"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Gender
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio"
                    />
                    <span className="ml-2" style={{ color: 'black' }}>Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio"
                    />
                    <span className="ml-2" style={{ color: 'black' }}>Female</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="aboutPet" className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  About Pet
                </label>
                <textarea
                  id="aboutPet"
                  value={aboutPet}
                  onChange={(e) => setAboutPet(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: 'black' }}>
                  Pet Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium hover:text-gray-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black"
                        style={{ color: 'black' }}
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleImageUpload}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1" style={{ color: 'black' }}>or drag and drop</p>
                    </div>
                    <p className="text-xs" style={{ color: 'black' }}>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                {previewImage && (
                  <div className="mt-3">
                    <img src={previewImage} alt="Preview" className="w-64 h-64 object-contain rounded-lg" />
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  style={{ backgroundColor: '#e0d082', color: 'black' }}
                >
                  Update Pet Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateListing;
