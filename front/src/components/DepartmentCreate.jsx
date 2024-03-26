import React, { useState } from 'react';
import axios from 'axios';

const DepartmentCreate = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/departments', { name, number }); // Adjust the URL based on your backend endpoint
      // Optionally, you can handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating departments:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create departments</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default DepartmentCreate;
