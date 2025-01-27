// import React, { useState } from 'react';
// import { FaLock, FaPhone, FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { toast } from 'react-toastify';
// import { registerUserApi } from '../../apis/Api';
// import './register.css';

// const Register = () => {

//     const [fullname, setFullname] = useState('')
//     const [phonenumber, setPhonenumber] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     const [fullnameerror, setFullnameError] = useState('')
//     const [phonenumbererror, setPhonenumberError] = useState('')
//     const [emailerror, setEmailError] = useState('')
//     const [passworderror, setPasswordError] = useState('')
//     const [confirmpassworderror, setConfirmPasswordError] = useState('')

//     const handleFullname = (e) => {
//         setFullname(e.target.value)
//     }
//     const handlePhonenumber = (e) => {
//         setPhonenumber(e.target.value)
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value)
//     }
//     const handlePassword = (e) => {
//         setPassword(e.target.value)
//     }
//     const handleConfPassword = (e) => {
//         setConfirmPassword(e.target.value)
//     }
//     var validate = () => {
//         var isValid = true;
//         if (fullname.trim() === '') {
//             setFullnameError('Please enter firstname')
//             isValid = false;
//         }
//         if (phonenumber.trim() === '') {
//             setPhonenumberError('Please enter lastname')
//             isValid = false;
//         }
//         if (email.trim() === '') {
//             setEmailError('Please enter email')
//             isValid = false;
//         }
//         if (password.trim() === '') {
//             setPasswordError('Please enter password')
//             isValid = false;
//         }
//         if (confirmPassword.trim() === '') {
//             setConfirmPasswordError('Please Confirm password')
//             isValid = false;
//         }
//         if (password !== confirmPassword) {
//             setConfirmPasswordError("Password does not match")
//             isValid = false;
//         }
//         return isValid;
//     }
//     const handleButton = (e) => {
//         e.preventDefault()
//         var isValid = validate()
//         if (!isValid) {
//             return;
//         }
//         //Making Api request
//         //Making JSON object of register data
//         const data = {
//             "fullname": fullname,
//             "phonenumber": phonenumber,
//             "email": email,
//             "password": password
//         }
//         registerUserApi(data).then((res) => {
//             if (res.data.success === false) {
//                 toast.error(res.data.message);
//             } else {
//                 toast.success(res.data.message);
//             }
//         })
//     }

//     return (
//         <>
//             <div className='register-body'>
//                 <div className='wrapper register'>
//                     <div className="form-box register">
//                         <form action="">
//                             <h1>Sign Up</h1>
//                             <div className="input-box">
//                                 <input onChange={handleFullname} type="text"
//                                     placeholder='Full Name' required />
//                                 <FaUser className='icon' />
//                                 {
//                                     fullnameerror && <small>{fullnameerror}</small>
//                                 }
//                             </div>
//                             <div className="input-box">
//                                 <input onChange={handlePhonenumber} type="text"
//                                     placeholder='Phone Number' required />
//                                 <FaPhone className='icon' />
//                                 {
//                                     phonenumbererror && <small>{phonenumbererror}</small>
//                                 }
//                             </div>
//                             <div className="input-box">
//                                 <input onChange={handleEmail} type="email"
//                                     placeholder='Email' required />
//                                 <MdEmail className='icon' />
//                                 {
//                                     emailerror && <small>{emailerror}</small>
//                                 }
//                             </div>
//                             <div className="input-box">
//                                 <input onChange={handlePassword} type="password"
//                                     placeholder='Password' required />
//                                 <FaLock className='icon' />
//                                 {
//                                     passworderror && <small>{passworderror}</small>
//                                 }
//                             </div>
//                             <div className="input-box">
//                                 <input onChange={handleConfPassword} type="password"
//                                     placeholder='Confirm Passwprd' required />
//                                 <FaLock className='icon' />
//                                 {
//                                     confirmpassworderror && <small>{confirmpassworderror}</small>
//                                 }
//                             </div>
//                             <button onClick={handleButton} type="submit">Sign Up</button>
//                             <div className="register-link">
//                                 <p>Already have an account?
//                                     <a href="../">
//                                         Login
//                                     </a>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Register

import React, { useState } from 'react';
import { FaLock, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from 'react-toastify';
import { registerUserApi } from '../../apis/Api';
import logo from '../../assets/logo1-removebg-preview.png';
import './register.css';

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [fullnameError, setFullnameError] = useState('');
    const [phonenumberError, setPhonenumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleValidation = () => {
        let isValid = true;
        if (fullname.trim() === '') {
            setFullnameError('Please enter your full name');
            isValid = false;
        }
        if (phonenumber.trim() === '') {
            setPhonenumberError('Please enter your phone number');
            isValid = false;
        }
        if (email.trim() === '' || !email.includes('@')) {
            setEmailError('Please enter a valid email');
            isValid = false;
        }
        if (password.trim() === '') {
            setPasswordError('Please enter a password');
            isValid = false;
        }
        if (confirmPassword.trim() === '' || password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        }
        return isValid;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!handleValidation()) return;

        const data = {
            fullname,
            phonenumber,
            email,
            password,
        };

        registerUserApi(data).then((res) => {
            if (!res.data.success) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
            }
        });
    };

    return (
        <div className="register-body">
            <div className="wrapper register">
            <img src={logo}  className="logo" />
                <div className="form-box register">
                    <form>
                        <h1 className="text-1xl font-semibold text-black-800 mb-6">Sign Up</h1>
                        <div className="input-box register relative">
                            {fullname === '' && <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />}
                            <input
                                onChange={(e) => setFullname(e.target.value)}
                                type="text"
                                placeholder="Full Name"
                                value={fullname}
                                required
                                className="w-full p-2 pl-10 border border-brown-300 rounded"
                            />
                            {fullnameError && <p className="text-red-500 text-sm mt-1">{fullnameError}</p>}
                        </div>
                        <div className="input-box register relative mt-4">
                            {phonenumber === '' && <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />}
                            <input
                                onChange={(e) => setPhonenumber(e.target.value)}
                                type="text"
                                placeholder="Phone Number"
                                value={phonenumber}
                                required
                                className="w-full p-2 pl-10 border border-brown-300 rounded"
                            />
                            {phonenumberError && <p className="text-red-500 text-sm mt-1">{phonenumberError}</p>}
                        </div>
                        <div className="input-box register relative mt-4">
                            {email === '' && <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />}
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                value={email}
                                required
                                className="w-full p-2 pl-10 border border-brown-300 rounded"
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div className="input-box register relative mt-4">
                            {password === '' && <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />}
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                value={password}
                                required
                                className="w-full p-2 pl-10 border border-black-300 rounded"
                            />
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                        <div className="input-box register relative mt-4">
                            {confirmPassword === '' && <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />}
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                required
                                className="w-full p-2 pl-10 border border-black-300 rounded"
                            />
                            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
                        </div>
                        <button
                            onClick={handleRegister}
                            type="submit"
                            className="w-full bg-E0D082-600 text-black py-2 rounded mt-6 hover:bg-brown-500 transition duration-300"
                        >
                            Sign Up
                        </button>
                        <div className="register-link mt-4 text-center">
                            <p className="text-black-700">
                                Already have an account?
                                <a href="../" className="text-black-600 hover:text-brown-800 ml-1">
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
