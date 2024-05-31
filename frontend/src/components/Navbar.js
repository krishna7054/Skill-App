// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Skill App</Link>
        <div>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
          <Link to="/dashboard" className="text-white mx-2">Dashboard</Link>
          <button onClick={handleLogout} className="text-white mx-2">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
