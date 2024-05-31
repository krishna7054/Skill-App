import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const UserList = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await api.get('/skills/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleAddSkills = (userId) => {
    onUserSelect(userId);
    navigate(`/add-skill/${userId}`); // Navigate to the SkillForm page with the user ID
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6">Users and Their Skills</h2>
      <ul>
        {users.map(user => (
          <li key={user._id} className="mb-4 p-4 border border-gray-300 rounded">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
            <p>Skills: {user.skills.map(skill => skill.name).join(', ')}</p>
            <button 
              className="mt-2 p-2 bg-blue-500 text-white rounded"
              onClick={() => handleAddSkills(user._id)}
            >
              Add Skills
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
