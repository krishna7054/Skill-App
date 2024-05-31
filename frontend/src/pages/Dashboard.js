// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkillForm from '../components/SkillForm';
import UserList from '../components/UserList';
import api from '../utils/api';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userSkills, setUserSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserInfo(token);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const fetchUserInfo = async (token) => {
    try {
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      const response = await api.get('/auth/user', config);
      setCurrentUserId(response.data._id);
      setUserName(response.data.name);
      fetchUserSkills(response.data._id);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const fetchUserSkills = async (userId) => {
    try {
      const response = await api.get(`/skills/${userId}`);
      setUserSkills(response.data.skills);
    } catch (error) {
      console.error('Error fetching user skills:', error);
    }
  };

  const handleUserSelect = (userId) => {
    setCurrentUserId(userId);
    fetchUserSkills(userId);
  };

  return (
    <div>
      <h1 className='flex justify-center text-xl'>Welcome to the Dashboard, {userName}</h1>
      <UserList onUserSelect={handleUserSelect} />
      
    </div>
  );
};

export default Dashboard;
