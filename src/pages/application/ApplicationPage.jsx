import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { applicationApi } from '../../apis/Api.js';
import dogImage from '../../assets/background.png'; // Replace with the actual path to the dog image
import Footer from '../../components/Footer'; // Import Footer component
import Navbar from '../../components/Navbar.jsx';


const ApplicationPage = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phonenumber: '',
    occupation: '',
    haveDog: '',
    reasonsForAdopting: '',
    livingSituation: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.age.trim()) tempErrors.age = 'Age is required';
    if (!formData.address.trim()) tempErrors.address = 'Address is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    if (!formData.phonenumber.trim()) tempErrors.phonenumber = 'Phone number is required';
    if (!formData.occupation.trim()) tempErrors.occupation = 'Occupation is required';
    if (!formData.haveDog) tempErrors.haveDog = 'This field is required';
    if (!formData.reasonsForAdopting.trim()) tempErrors.reasonsForAdopting = 'Reason for adopting is required';
    if (!formData.livingSituation) tempErrors.livingSituation = 'Living situation is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        ...formData,
        petId: id
      }
      applicationApi(data).then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      });
    } else {
      console.log(
        "error", errors)
    }
  };

  return (
    <div className="min-h-screen bg-[#E0D082] font-sans">
      <Navbar />


      <div className="container mx-auto flex items-center mt-12" style={{ marginTop: '100px' }} >
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <img
            src={dogImage}
            alt="Adoptable Dog"
            className="rounded-l-lg"
            style={{
              height: '400px', // Set the desired height
              width: 'auto', // Adjust width proportionally
              objectFit: 'cover' // Ensure the image fills the container without distortion

            }}
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex-grow bg-white rounded-r-lg shadow-lg overflow-hidden border border-[#d4c074]">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-black text-center">Adoption Application Form</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-black mb-2">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-black mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phonenumber" className="block text-sm font-medium text-black mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.phonenumber && <p className="text-red-500 text-xs mt-1">{errors.phonenumber}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="reasonsForAdopting" className="block text-sm font-medium text-black mb-2">Reasons for Adopting</label>
                <textarea
                  id="reasonsForAdopting"
                  name="reasonsForAdopting"
                  value={formData.reasonsForAdopting}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                ></textarea>
                {errors.reasonsForAdopting && <p className="text-red-500 text-xs mt-1">{errors.reasonsForAdopting}</p>}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#E0D082] text-black font-semibold rounded-lg shadow-md hover:bg-[#d4c074] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Submit Application
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
      <Footer />
    </div>

  );
};

export default ApplicationPage;
