import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addListingApi } from '../../apis/Api';
import { FaUpload, FaPaw } from 'react-icons/fa';
import officiallogo from '../../assets/logo1-removebg-preview.png';

const AdminAddListings = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [aboutPet, setAboutPet] = useState('');
  const [petImage, setPetImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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
    formData.append('petImage', petImage);

    addListingApi(formData)
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
              <span className="text-xl font-bold text-black">Paws&Homes</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
  <div
    className="rounded-lg shadow-lg overflow-hidden border border-gray-300"
    style={{ backgroundColor: '#e0d082' }}
  >
    <div
      className="p-8"
      style={{ backgroundColor: 'white' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-black">Add New Pet Listing</h2>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="petName" className="block text-sm font-medium text-black mb-2">
                  Pet Name
                </label>
                <input
                  type="text"
                  id="petName"
                  onChange={(e) => setPetName(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="petType" className="block text-sm font-medium text-black mb-2">
                  Pet Type
                </label>
                <select
                  id="petType"
                  onChange={(e) => setPetType(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Type</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </select>
              </div>
              <div>
                <label htmlFor="breed" className="block text-sm font-medium text-black mb-2">
                  Breed
                </label>
                <input
                  type="text"
                  id="breed"
                  onChange={(e) => setBreed(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-black mb-2">
                  Size
                </label>
                <input
                  type="text"
                  id="size"
                  onChange={(e) => setSize(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Gender
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio text-black"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      className="form-radio text-black"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="aboutPet" className="block text-sm font-medium text-black mb-2">
                  About Pet
                </label>
                <textarea
                  id="aboutPet"
                  onChange={(e) => setAboutPet(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Pet Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-black">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {previewImage && (
                  <div className="mt-3">
                    <img src={previewImage} alt="Preview" className="max-w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-black font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
                  style={{ backgroundColor: '#e0d082' }}
                >
                  Add Pet Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddListings;
