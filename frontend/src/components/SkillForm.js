import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const SkillForm = () => {
  const { userId } = useParams();
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchUserSkills = async () => {
      try {
        const response = await api.get(`/skills/users/${userId}`);
        setSkills(response.data.skills);
      } catch (error) {
        console.error('Error fetching user skills:', error);
      }
    };

    fetchUserSkills();
  }, [userId]);

  const onChange = (e) => setInput(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      const response = await api.post('/skills/add-skill', { name: input, userId }, config);
      setSkills([...skills, response.data]); // Update the skills list with the new skill
      setInput('');
    } catch (err) {
      console.error(err);
      setError('Failed to add skill');
    }
  };

  const handleDelete = async (skillId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      await api.delete(`/skills/delete-skill/${skillId}`, config);
      setSkills(skills.filter(skill => skill._id !== skillId)); // Update the skills list after deletion
    } catch (err) {
      console.error(err);
      setError('Failed to remove skill');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-6">Add Skill</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Skill</label>
          <input
            type="text"
            value={input}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter skill"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Skill
        </button>
      </form>
      <h3 className="text-xl mt-6">Current Skills:</h3>
      <ul className="list-disc list-inside">
        {skills.map(skill => (
          <li key={skill._id} className="flex justify-between items-center">
            {skill.name}
            <button
              onClick={() => handleDelete(skill._id)}
              className="bg-red-500 text-white p-1 rounded ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillForm;
