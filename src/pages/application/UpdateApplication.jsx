import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleApplicationApi, updateApplicationApi } from '../../apis/Api'; // Assuming this is the correct path
import Navbar from '../../components/Navbar'; // Assuming you have a Navbar component
import Footer from '../../components/Footer'; // Import Footer component
import dogImage from '../../assets/background.png'; // Replace with the actual path to the dog image



const UpdateApplication = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

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
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const fetchApplicationData = async () => {
      setIsFetching(true)
      try {
        const response = await getSingleApplicationApi(id);
        // setFormData(response.data);
         // Ensure all fields are loaded properly, including converting `age` to a string
         setFormData(prevState => ({
          ...prevState,
          ...response.data,
          age: response.data.age ? String(response.data.age) : "" 
        }));
      } catch (error) {
        console.error("Error fetching application data:", error);
        // Handle error (e.g., show error message or redirect)
      } finally {
        setIsFetching(false)
      }
    }

    fetchApplicationData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: name === "age" ? String(value) : value // Ensure age is stored as a string
    }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    // if (!formData.age.trim()) tempErrors.age = 'Age is required'
    if (!String(formData.age || "").trim()) tempErrors.age = 'Age is required'; // Ensure age is validated as a string
    if (!formData.address.trim()) tempErrors.address = 'Address is required'
    if (!formData.email.trim()) tempErrors.email = 'Email is required'
    if (!formData.phonenumber.trim()) tempErrors.phonenumber = 'Phone number is required'
    if (!formData.occupation.trim()) tempErrors.occupation = 'Occupation is required'
    if (!formData.haveDog) tempErrors.haveDog = 'This field is required'
    if (!formData.reasonsForAdopting.trim()) tempErrors.reasonsForAdopting = 'Reason for adopting is required'
    if (!formData.livingSituation) tempErrors.livingSituation = 'Living situation is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setIsLoading(true)
      try {
        // await updateApplicationApi(id, formData)
        await updateApplicationApi(id, {
          ...formData,
          age: String(formData.age) // Ensure age is passed as a string
        });
        navigate('/profile/profile') // Adjust this path as needed
      } catch (error) {
        console.error("Error updating application:", error)
        // Handle error (e.g., show error message)
      } finally {
        setIsLoading(false)
      }
    }
  }

  if (isFetching) {
    return <div className="min-h-screen bg-brown-50 font-sans flex items-center justify-center">
      <p className="text-xl text-brown-800">Loading application data...</p>
    </div>
  }

  return (
    <div className="min-h-screen bg-[#E0D082] font-sans">
      <Navbar />

      <div className="container mx-auto flex items-center mt-12" style={{ marginTop: '100px' }}>
                {/* Left Side: Image */}
                <div className="flex-shrink-0">
          <img
            src={dogImage}
            alt="Adoptable Dog"
            className="rounded-l-lg"
            style={{
              height: '400px',
              width: 'auto',
              objectFit: 'cover'
            }}
          />
        </div>

        <div className="flex-grow bg-white rounded-r-lg shadow-lg overflow-hidden border border-[#d4c074]">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-black text-center">Update Adoption Application</h2>
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
              {/* Add other form fields here */}
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
                <label htmlFor="occupation" className="block text-sm font-medium text-black mb-2">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                />
                {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">Do you have another pet at present?</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="haveDog"
                      value="true"
                      checked={formData.haveDog === 'true'}
                      onChange={handleChange}
                      className="form-radio text-black-600"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="haveDog"
                      value="false"
                      checked={formData.haveDog === 'false'}
                      onChange={handleChange}
                      className="form-radio text-black-600"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.haveDog && <p className="text-red-500 text-xs mt-1">{errors.haveDog}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="livingSituation" className="block text-sm font-medium text-black mb-2">Living Situation</label>
                <select
                  id="livingSituation"
                  name="livingSituation"
                  value={formData.livingSituation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
                >
                  <option value="">Select your living situation</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="shared">Shared Space</option>
                  <option value="other">Other</option>
                </select>
                {errors.livingSituation && <p className="text-red-500 text-xs mt-1">{errors.livingSituation}</p>}
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
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-[#E0D082] text-black font-semibold rounded-lg shadow-md hover:bg-[#d4c074] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  {isLoading ? 'Updating...' : 'Update Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UpdateApplication


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { updateApplicationApi, getSingleApplicationApi } from '../../apis/Api'; // Assuming this is the correct path
// import Navbar from '../../components/Navbar'; // Assuming you have a Navbar component

// const UpdateApplication = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         address: '',
//         email: '',
//         phonenumber: '',
//         occupation: '',
//         haveDog: '',
//         reasonsForAdopting: '',
//         livingSituation: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [isFetching, setIsFetching] = useState(true);

//     useEffect(() => {
//         const fetchApplicationData = async () => {
//             setIsFetching(true);
//             try {
//                 const response = await getSingleApplicationApi(id);
//                 setFormData(response.data);
//             } catch (error) {
//                 console.error("Error fetching application data:", error);
//             } finally {
//                 setIsFetching(false);
//             }
//         };

//         fetchApplicationData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: value
//         }));
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//     };

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.name.trim()) tempErrors.name = 'Name is required';
//         if (!formData.age.trim()) tempErrors.age = 'Age is required';
//         if (!formData.address.trim()) tempErrors.address = 'Address is required';
//         if (!formData.email.trim()) tempErrors.email = 'Email is required';
//         if (!formData.phonenumber.trim()) tempErrors.phonenumber = 'Phone number is required';
//         if (!formData.occupation.trim()) tempErrors.occupation = 'Occupation is required';
//         if (!formData.haveDog) tempErrors.haveDog = 'This field is required';
//         if (!formData.reasonsForAdopting.trim()) tempErrors.reasonsForAdopting = 'Reason for adopting is required';
//         if (!formData.livingSituation) tempErrors.livingSituation = 'Living situation is required';
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//             setIsLoading(true);
//             try {
//                 await updateApplicationApi(id, formData);
//                 navigate('/applications'); // Adjust this path as needed
//             } catch (error) {
//                 console.error("Error updating application:", error);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//     };

//     if (isFetching) {
//         return (
//             <div className="min-h-screen bg-[#E0D082] font-sans flex items-center justify-center">
//                 <p className="text-xl text-black">Loading application data...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#E0D082] font-sans">
//             <Navbar />
//             <div className="container mx-auto px-4 py-8">
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#d4c074]">
//                     <div className="p-8">
//                         <h2 className="text-3xl font-bold mb-6 text-black text-center">Update Adoption Application</h2>
//                         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Full Name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                             </div>
//                             <div>
//                                 <label htmlFor="age" className="block text-sm font-medium text-black mb-2">Age</label>
//                                 <input
//                                     type="text"
//                                     id="age"
//                                     name="age"
//                                     value={formData.age}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
//                             </div>
//                             <div className="md:col-span-2">
//                                 <label htmlFor="address" className="block text-sm font-medium text-black mb-2">Address</label>
//                                 <input
//                                     type="text"
//                                     id="address"
//                                     name="address"
//                                     value={formData.address}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <label htmlFor="phonenumber" className="block text-sm font-medium text-black mb-2">Phone Number</label>
//                                 <input
//                                     type="tel"
//                                     id="phonenumber"
//                                     name="phonenumber"
//                                     value={formData.phonenumber}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.phonenumber && <p className="text-red-500 text-xs mt-1">{errors.phonenumber}</p>}
//                             </div>
//                             <div className="md:col-span-2">
//                                 <label htmlFor="occupation" className="block text-sm font-medium text-black mb-2">Occupation</label>
//                                 <input
//                                     type="text"
//                                     id="occupation"
//                                     name="occupation"
//                                     value={formData.occupation}
//                                     onChange={handleChange}
//                                     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0D082]"
//                                 />
//                                 {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
//                             </div>
//                             <div className="md:col-span-2">
//                                 <button
//                                     type="submit"
//                                     disabled={isLoading}
//                                     className="w-full px-6 py-3 bg-[#E0D082] text-black font-semibold rounded-lg shadow-md hover:bg-[#d4c074] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
//                                 >
//                                     {isLoading ? 'Updating...' : 'Update Application'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateApplication;



