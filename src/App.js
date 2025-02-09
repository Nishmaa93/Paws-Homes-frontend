import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import AboutUs from './pages/AboutUs/AboutUs';
import AdminAddListings from './pages/admin/AdminAddListings';
import AdminApplication from './pages/admin/AdminApplication';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHomepage from './pages/admin/AdminHomepage';
import ApplicationDetails from './pages/admin/ApplicantsDetail';
import MeetList from './pages/admin/PickUpSchedule';
import UpdateListing from './pages/admin/UpdateListing';
import AllPets from './pages/all_pets/AllPets';
import ApplicationPage from './pages/application/ApplicationPage';
import UpdateApplication from './pages/application/UpdateApplication';
import CategoryPets from './pages/category_pets/CategoryPets';
import Dashboard from './pages/dashboard/Dashboard';
import DonationForm from './pages/donation/donation_page';
import ForgotPassword from './pages/login/ForgotPassword';
import Login from './pages/login/Login';
import VerifyOtpAndResetPassword from './pages/login/verifyotp';
import Logout from './pages/logout/Logout';
import Mail from './pages/mail/mail';
import PetDetails from './pages/pet_details/PetDetails';
import PetGrooming from './pages/Pet_Grooming/PetGrooming'; // Import your Pet Grooming component
import ProfilePage from './pages/profile/Profile';
import Register from './pages/register/Register';
import SearchComponent from './pages/search/Search';
import HelpPage from './pages/help/HelpPage';
import ApplicationForm from './pages/applicationform/ApplicationForm'; //yo haleko
import EditProfile from './pages/EditProfile/EditProfile';





function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/verify-otp' element={<VerifyOtpAndResetPassword />} />
        <Route path='/logout' element={<Logout />}></Route>
        {/* {User Routes} */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/pet_details/:id' element={<PetDetails />} />
        <Route path='/listings' element={<AllPets />} />
        <Route path='/application/:id' element={<ApplicationPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/pets-category' element={<CategoryPets />} />
        <Route path='/mail' element={<Mail />} />
        <Route path='/donation' element={<DonationForm />} />
        <Route path='/update_application/:id' element={<UpdateApplication />} />
        <Route path="/pet-grooming" element={<PetGrooming />} /> {/* Add the Pet Grooming route */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/application-form" element={<ApplicationForm />} /> //yo haleko
        <Route path="/edit-profile" element={<EditProfile />} />



        {/* {Admin Routes} */}
        <Route path="/admin/addlisting" element={<AdminAddListings />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/updatelisting/:id" element={<UpdateListing />} />
        <Route path='/admin/home' element={<AdminHomepage />} />
        <Route path='/admin/application' element={<AdminApplication />} />
        <Route path='/admin/applicant-detail/:id' element={<ApplicationDetails />} />
        <Route path='/admin/schedules' element={<MeetList />} />
      </Routes>
    </Router>
  );
}

export default App;

