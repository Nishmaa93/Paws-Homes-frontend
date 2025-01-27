import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        navigate("/");
    }, [])
    return (
        <p>Logout......</p>
    )
}

export default Logout;
