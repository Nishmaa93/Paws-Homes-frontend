// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa';
// import Navbar from '../../components/Navbar';
// import ApplicationCard from '../../components/applicationcards';
// import { deleteApplicationApi, getUserApplicationApi,getoneListing } from '../../apis/Api';
// import { toast } from 'react-toastify';

// const ProfilePage = () => {

//   const [applications, setApplications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [applicationsWithPetDetails,setApplicationsWithPetDetails]=useState([]);


//   const storedUser = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchUserAndApplications = async () => {
//       try {
//         const response = await getUserApplicationApi(storedUser._id);

//       // Assuming the API returns an object with a data property containing the applications
//       const applicationsData = response.data.applications;
//         setApplications(applicationsData);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     fetchUserAndApplications();
//   }, []);
//   console.log(applications)



//   useEffect(() => {
//     console.log('Pet details useEffect triggered. Applications:', applications);

//     const fetchPetDetails = async () => {
//       try {
//         const updatedApplications = await Promise.all(
//           applications.map(async (application, index) => {
//             try {
//               console.log(`Fetching pet details for application ${index}:`, application);
//               const petResponse = await getoneListing(application.petId);
//               console.log(`Pet response for application ${index}:`, petResponse);
//               return {
//                 ...application,
//                 petImage: petResponse.data.petImage,
//                 petName: petResponse.data.petName
//               };
//             } catch (error) {
//               console.error(`Error fetching pet details for application ${index}:`, error);
//               console.error('Application data:', application);
//               return application;
//             }
//           })
//         );
//         console.log('Updated applications with pet details:', updatedApplications);
//         setApplicationsWithPetDetails(updatedApplications);
//       } catch (error) {
//         console.error('Error in fetchPetDetails:', error);
//       }
//     };

//     if (applications.length > 0) {
//       console.log('Starting to fetch pet details for', applications.length, 'applications');
//       fetchPetDetails();
//     } else {
//       console.log('No applications to fetch pet details for. Applications state:', applications);
//     }
//   }, [applications]);
//   console.log(applicationsWithPetDetails)


//   const handleEdit = () => setIsEditing(!isEditing);
//   const handleSave = () => {
//     // Implement save logic here
//     setIsEditing(false);
//   };
//   const handleDeleteApplication = async (applicationId) => {
//     try {
//       await deleteApplicationApi(applicationId);
//       setApplicationsWithPetDetails(prevApplications => 
//         prevApplications.filter(app => app._id !== applicationId)
//       );
//       toast.success('Application cancelled successfully');
//     } catch (error) {
//       console.error('Error deleting application:', error);
//       toast.error('Failed to cancel application');
//     }
//   };
//   return (
//     <>
//     <Navbar />
//     <div className="bg-[#AC8968] min-h-screen p-8 pt-24">
//       <div className="max-w-3xl mx-auto rounded-lg p-6 mb-8 bg-[#AC8968] shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-3xl font-bold text-white">
//             {isEditing ? (
//               <input
//                 type="text"
//                 value={storedUser.fullname}
//                 className="bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-300 text-3xl font-bold text-white w-full"
//               />
//             ) : storedUser.fullname}
//           </h1>
//           <button
//             onClick={isEditing ? handleSave : handleEdit}
//             className="flex items-center bg-[#8B4513] text-white px-3 py-1 rounded-full hover:bg-[#A0522D] transition duration-300 text-sm"
//           >
//             {isEditing ? <FaCheck className="mr-1" /> : <FaEdit className="mr-1" />}
//             {isEditing ? 'Save' : 'Edit'}
//           </button>
//         </div>
//         <div className="space-y-3">
//           <p className="flex items-center text-white">
//             <FaPhone className="mr-2 text-yellow-300" />
//             {isEditing ? (
//               <input
//                 type="tel"
//                 value={storedUser.phonenumber}
//                 className="bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-300 w-full text-white"
//               />
//             ) : storedUser.phonenumber}
//           </p>
//           <p className="flex items-center text-white">
//             <FaEnvelope className="mr-2 text-yellow-300" />
//             {isEditing ? (
//               <input
//                 type="email"
//                 value={storedUser.email}
//                 className="bg-transparent border-b-2 border-white focus:outline-none focus:border-yellow-300 w-full text-white"
//               />
//             ) : storedUser.email}
//           </p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-semibold text-white mb-6">Your Applications</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p className="text-white">Loading applications...</p>
//         ) : error ? (
//           <p className="text-red-300">{error}</p>
//         ) : applicationsWithPetDetails.length === 0 ? (
//           <p className="text-white">No applications found.</p>
//         ) : (
//           applicationsWithPetDetails.map((app) => (
//             <ApplicationCard key={app._id} app={app} onDelete={handleDeleteApplication} />
//           ))
//         )}
//       </div>
//     </div>
//   </>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaCheck, FaPhone, FaEnvelope, FaCamera } from 'react-icons/fa';
// import Navbar from '../../components/Navbar';
// import ApplicationCard from '../../components/applicationcards';
// import { deleteApplicationApi, getUserApplicationApi, getoneListing } from '../../apis/Api';
// import { toast } from 'react-toastify';
// import './profile.css'; // Import the new CSS file
// import Footer from '../../components/Footer'; // Import Footer component


// const ProfilePage = () => {
//   const [applications, setApplications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [applicationsWithPetDetails, setApplicationsWithPetDetails] = useState([]);
//   const [profileImage, setProfileImage] = useState(null);

//   const storedUser = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchUserAndApplications = async () => {
//       try {
//         const response = await getUserApplicationApi(storedUser._id);
//         setApplications(response.data.applications);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     fetchUserAndApplications();
//   }, []);

//   useEffect(() => {
//     const fetchPetDetails = async () => {
//       try {
//         const updatedApplications = await Promise.all(
//           applications.map(async (application) => {
//             try {
//               const petResponse = await getoneListing(application.petId);
//               return {
//                 ...application,
//                 petImage: petResponse.data.petImage,
//                 petName: petResponse.data.petName,
//               };
//             } catch (error) {
//               console.error('Error fetching pet details:', error);
//               return application;
//             }
//           })
//         );
//         setApplicationsWithPetDetails(updatedApplications);
//       } catch (error) {
//         console.error('Error in fetchPetDetails:', error);
//       }
//     };

//     if (applications.length > 0) {
//       fetchPetDetails();
//     }
//   }, [applications]);

//   const handleEdit = () => setIsEditing(!isEditing);
//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleDeleteApplication = async (applicationId) => {
//     try {
//       await deleteApplicationApi(applicationId);
//       setApplicationsWithPetDetails((prevApplications) =>
//         prevApplications.filter((app) => app._id !== applicationId)
//       );
//       toast.success('Application cancelled successfully');
//     } catch (error) {
//       console.error('Error deleting application:', error);
//       toast.error('Failed to cancel application');
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <div className="profile-image-container">
//             <img
//               src={profileImage || "https://via.placeholder.com/120"}
//               alt="Profile"
//               className="profile-image"
//             />
//             <label className="upload-icon">
//               <FaCamera className="camera-icon" />
//               <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//             </label>
//           </div>

//           <div className="profile-details">
//             <h1 className="profile-name">
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={storedUser.fullname}
//                   className="profile-input"
//                 />
//               ) : (
//                 storedUser.fullname
//               )}
//             </h1>

//             <p className="profile-info">
//               <FaPhone className="icon" />
//               {isEditing ? (
//                 <input type="tel" value={storedUser.phonenumber} className="profile-input" />
//               ) : (
//                 storedUser.phonenumber
//               )}
//             </p>
//             <p className="profile-info">
//               <FaEnvelope className="icon" />
//               {isEditing ? (
//                 <input type="email" value={storedUser.email} className="profile-input" />
//               ) : (
//                 storedUser.email
//               )}
//             </p>

//             <button onClick={isEditing ? handleSave : handleEdit} className="edit-button">
//   {isEditing ? <FaCheck className="icon" /> : <FaEdit className="icon" />}
//   {isEditing ? "Save Profile" : "Edit Profile"}
// </button>

//           </div>
//         </div>

//         <h2 className="applications-title">Your Applications</h2>
//         <div className="applications-grid">
//           {isLoading ? (
//             <p className="loading-text">Loading applications...</p>
//           ) : error ? (
//             <p className="error-text">{error}</p>
//           ) : applicationsWithPetDetails.length === 0 ? (
//             <p className="no-applications">No applications found.</p>
//           ) : (
//             applicationsWithPetDetails.map((app) => (
//               <ApplicationCard key={app._id} app={app} onDelete={handleDeleteApplication} />
//             ))
//           )}
//         </div>
//         <Footer/>
//       </div>
//     </>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from 'react';
// import { FaCamera, FaCheck, FaEdit, FaEnvelope, FaPhone } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { deleteApplicationApi, getUserApplicationApi, getoneListing } from '../../apis/Api';
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import ApplicationCard from '../../components/applicationcards';
// import './profile.css';
// import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
//   const [applications, setApplications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [applicationsWithPetDetails, setApplicationsWithPetDetails] = useState([]);
//   const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
//   const navigate = useNavigate(); // Initialize navigation

//   const storedUser = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchUserAndApplications = async () => {
//       try {
//         const response = await getUserApplicationApi(storedUser._id);
//         setApplications(response.data.applications);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };
//     fetchUserAndApplications();
//   }, []);

//   useEffect(() => {
//     const fetchPetDetails = async () => {
//       try {
//         const updatedApplications = await Promise.all(
//           applications.map(async (application) => {
//             try {
//               const petResponse = await getoneListing(application.petId);
//               return {
//                 ...application,
//                 petImage: petResponse.data.petImage,
//                 petName: petResponse.data.petName,
//               };
//             } catch (error) {
//               console.error('Error fetching pet details:', error);
//               return application;
//             }
//           })
//         );
//         setApplicationsWithPetDetails(updatedApplications);
//       } catch (error) {
//         console.error('Error in fetchPetDetails:', error);
//       }
//     };

//     if (applications.length > 0) {
//       fetchPetDetails();
//     }
//   }, [applications]);

//   const handleEdit = () => setIsEditing(!isEditing);
//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleDeleteApplication = async (applicationId) => {
//     try {
//       await deleteApplicationApi(applicationId);
//       setApplicationsWithPetDetails((prevApplications) =>
//         prevApplications.filter((app) => app._id !== applicationId)
//       );
//       toast.success('Application cancelled successfully');
//     } catch (error) {
//       console.error('Error deleting application:', error);
//       toast.error('Failed to cancel application');
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const imageUrl = reader.result;
//         setProfileImage(imageUrl);
//         localStorage.setItem('profileImage', imageUrl); // Store image in localStorage
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="profile-page-container">
//         {/* Profile Section */}
//         <div className="profile-section">
//           <div className="profile-card">
//             <div className="profile-image-container">
//               <img
//                 src={profileImage || "https://via.placeholder.com/120"}
//                 alt="Profile"
//                 className="profile-image"
//               />
//               <label className="upload-icon">
//                 <FaCamera className="camera-icon" />
//                 <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//               </label>
//             </div>

//             <div className="profile-details">
//               <h1 className="profile-name">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={storedUser.fullname}
//                     className="profile-input"
//                   />
//                 ) : (
//                   storedUser.fullname
//                 )}
//               </h1>

//               <div className="profile-info-container">
//                 {/* Phone Number */}
//                 <p className="profile-info">
//                   <FaPhone className="icon" />
//                   {isEditing ? (
//                     <input type="tel" value={storedUser.phonenumber} className="profile-input" />
//                   ) : (
//                     storedUser.phonenumber
//                   )}
//                 </p>

//                 {/* Email */}
//                 <p className="profile-info">
//                   <FaEnvelope className="icon" />
//                   {isEditing ? (
//                     <input type="email" value={storedUser.email} className="profile-input" />
//                   ) : (
//                     storedUser.email
//                   )}
//                 </p>
//               </div>

//               <button onClick={isEditing ? handleSave : handleEdit} className="edit-button">
//                 {isEditing ? <FaCheck className="icon" /> : <FaEdit className="icon" />}
//                 {isEditing ? "Save Profile" : "Edit Profile"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Applications Section */}
//         <div className="applications-container">
//           <h2 className="applications-title">Your Applications</h2>
//           <div className="applications-grid">
//             {isLoading ? (
//               <p className="loading-text">Loading applications...</p>
//             ) : error ? (
//               <p className="error-text">{error}</p>
//             ) : applicationsWithPetDetails.length === 0 ? (
//               <p className="no-applications">No applications found.</p>
//             ) : (
//               applicationsWithPetDetails.map((app) => (
//                 <ApplicationCard key={app._id} app={app} onDelete={handleDeleteApplication} />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from 'react';
import { FaCamera, FaCheck, FaEdit, FaEnvelope, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { deleteApplicationApi, getUserApplicationApi, getoneListing } from '../../apis/Api';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ApplicationCard from '../../components/applicationcards';
import './profile.css';
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [applicationsWithPetDetails, setApplicationsWithPetDetails] = useState([]);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);
  const navigate = useNavigate(); // Initialize navigation

  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUserAndApplications = async () => {
      try {
        const response = await getUserApplicationApi(storedUser._id);
        setApplications(response.data.applications);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchUserAndApplications();
  }, []);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const updatedApplications = await Promise.all(
          applications.map(async (application) => {
            try {
              const petResponse = await getoneListing(application.petId);
              return {
                ...application,
                petImage: petResponse.data.petImage,
                petName: petResponse.data.petName,
              };
            } catch (error) {
              console.error('Error fetching pet details:', error);
              return application;
            }
          })
        );
        setApplicationsWithPetDetails(updatedApplications);
      } catch (error) {
        console.error('Error in fetchPetDetails:', error);
      }
    };

    if (applications.length > 0) {
      fetchPetDetails();
    }
  }, [applications]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        localStorage.setItem('profileImage', imageUrl); // Store image in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-image-container">
              <img
                src={profileImage || "https://via.placeholder.com/120"}
                alt="Profile"
                className="profile-image"
              />
              <label className="upload-icon">
                <FaCamera className="camera-icon" />
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>

            <div className="profile-details">
              <h1 className="profile-name">{storedUser.fullname}</h1>

              <div className="profile-info-container">
                <p className="profile-info">
                  <FaPhone className="icon" /> {storedUser.phonenumber}
                </p>
                <p className="profile-info">
                  <FaEnvelope className="icon" /> {storedUser.email}
                </p>
              </div>

              {/* New Edit Profile Button (Navigates to Edit Profile Page) */}
              <button onClick={() => navigate("/edit-profile")} className="edit-button">
                <FaEdit className="icon" /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="applications-container">
          <h2 className="applications-title">Your Applications</h2>
          <div className="applications-grid">
            {isLoading ? (
              <p className="loading-text">Loading applications...</p>
            ) : error ? (
              <p className="error-text">{error}</p>
            ) : applicationsWithPetDetails.length === 0 ? (
              <p className="no-applications">No applications found.</p>
            ) : (
              applicationsWithPetDetails.map((app) => (
                <ApplicationCard key={app._id} app={app} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
