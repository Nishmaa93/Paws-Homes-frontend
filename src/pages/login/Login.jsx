// import React, { useState } from 'react';
// import { FaLock, FaUser } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { loginUserApi } from '../../apis/Api';
// import "./login.css";

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const navigate = useNavigate();

//     const validation = () => {
//         let isValid = true;
//         if (email === '' || email.includes("@") === false) {
//             setEmailError("Email is invalid");
//             isValid = false;
//         }
//         if (password.trim() === '') {
//             setPasswordError('Password is empty');
//             isValid = false;
//         }
//         return isValid;
//     }

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (!validation()) {
//             return;
//         }
//         console.log(email, password);
//         const data = {
//             "email": email,
//             "password": password,
//             "rememberMe": rememberMe,
//         }
//         loginUserApi(data).then((res) => {
//             if (res.data.success === false) {
//                 toast.error(res.data.message);
//             } else {
//                 toast.success(res.data.message);
//                 if (rememberMe) {
//                     localStorage.setItem('token', res.data.token);
//                     localStorage.setItem('user', JSON.stringify(res.data.userData));
//                 } else {
//                     sessionStorage.setItem('token', res.data.token);
//                     sessionStorage.setItem('user', JSON.stringify(res.data.userData));
//                 }
//                 if (res.data.userData.isAdmin) {
//                     navigate('/admin/home');
//                 } else {
//                     navigate('/dashboard');
//                 }

//             }
//         })
//     }

//     const handleForgotPassword = () => {
//         // Here you would typically make an API call to handle the forgot password functionality
//         console.log("Forgot password for phone number:", phoneNumber);
//         toast.info("Password reset instructions sent to your phone number.");
//         setShowForgotPasswordModal(false);
//     }

//     return (
//         <div className="login-body">
//             <div className='wrapper'>
//                 <div className="form-box login">
//                     <form action="">
//                         <h1 className="text-1xl font-semibold text-black-800 mb-6">Login</h1>
//                         <div className="input-box login relative">
//                             <input
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 type="email"
//                                 placeholder='Email'
//                                 required
//                                 className="w-full p-2 pl-10 border border-brown-300 rounded"
//                             />
//                             {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
//                             <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-brown-500' />
//                         </div>
//                         <div className="input-box login relative mt-4">
//                             <input
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 type="password"
//                                 placeholder='Password'
//                                 required
//                                 className="w-full p-2 pl-10 border border-brown-300 rounded"
//                             />
//                             {passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p>}
//                             <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-brown-500' />
//                         </div>
//                         <div className="remember-forgot flex justify-between items-center mt-4">
//                             <label className="flex items-center text-brown-700">
//                                 <input onChange={(e) => setRememberMe(e.target.checked)} type="checkbox" className="mr-2" />
//                                 Remember me
//                             </label>
//                             <a href="/forgot-password" className="text-brown-600 hover:text-brown-800">Forgot password?</a>
//                         </div>
//                         <button onClick={handleLogin} type="submit" className="w-full bg-brown-600 text-white py-2 rounded mt-6 hover:bg-brown-700 transition duration-300">Login</button>
//                         <div className="register-link mt-4 text-center">
//                             <p className="text-brown-700">Don't have an account?
//                                 <a href="../register" className="text-brown-600 hover:text-brown-800 ml-1">
//                                     Register
//                                 </a>
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';
import logo from '../../assets/logo1-removebg-preview.png';
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const navigate = useNavigate();

    const validation = () => {
        let isValid = true;
        if (email === '' || email.includes("@") === false) {
            setEmailError("Email is invalid");
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('Password is empty');
            isValid = false;
        }
        return isValid;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validation()) {
            return;
        }
        console.log(email, password);
        const data = {
            "email": email,
            "password": password,
            "rememberMe": rememberMe,
        }
        loginUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
                if (rememberMe) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.userData));
                } else {
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('user', JSON.stringify(res.data.userData));
                }
                if (res.data.userData.isAdmin) {
                    navigate('/admin/home');
                } else {
                    navigate('/dashboard');
                }

            }
        })
    }

    const handleForgotPassword = () => {
        // Here you would typically make an API call to handle the forgot password functionality
        console.log("Forgot password for phone number:", phoneNumber);
        toast.info("Password reset instructions sent to your phone number.");
        setShowForgotPasswordModal(false);
    }
    return (
        <div className="login-body">
            <div className='wrapper'>
            <img src={logo}  className="logo" />
                <div className="form-box login">
                    <form>
                        <h1 className="text-1xl font-semibold text-black-800 mb-6">Login</h1>
                        <div className="input-box login relative">
                            {email === '' && <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500' />}
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Email'
                                value={email}
                                required
                                className="w-full p-2 pl-10 border border-brown-300 rounded"
                            />
                            {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
                        </div>
                        <div className="input-box login relative mt-4">
                            {password === '' && <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500' />}
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='Password'
                                value={password}
                                required
                                className="w-full p-2 pl-10 border border-black-300 rounded"
                            />
                            {passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p>}
                        </div>
                        <div className="remember-forgot flex items-center mt-4">
                            <label className="flex items-center text-black-700 mr-4">
                                <input
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    type="checkbox"
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <a href="/forgot-password" className="text-blue-600 hover:text-blue-800">Forgot password?</a>
                        </div>
                        <button onClick={handleLogin} type="submit" className="w-full bg-darkblue-600 text-black py-2 rounded mt-6 hover:bg-brown-500 transition duration-300">Login</button>
                        <div className="register-link mt-4 text-center">
                            <p className="text-black-700">
                                Don't have an account?
                                <a href="../register" className="text-black-600 hover:text-brown-800 ml-1">
                                    Register
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;