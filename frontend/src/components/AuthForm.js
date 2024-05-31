// src/components/AuthForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // State for error messages

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = isLogin
        ? await api.post('/auth/login', { email, password })
        : await api.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.msg); // Set the error message from the response
      if (err.response.status === 400 && !isLogin) {
        alert('User already exists');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6">{isLogin ? 'Login' : 'Register'}</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={onSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
