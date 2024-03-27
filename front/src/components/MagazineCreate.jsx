import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MagazineCreate = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [publisherId, setPublisherId] = useState('');
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/publishers'); // Adjust the URL based on your backend endpoint
        setPublishers(data);
        if (data.length > 0) {
          // Set default author ID to the first author in the list
          setPublisherId(data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    };
    fetchPublishers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/magazines', { number, name, type, publisher: publisherId }); // Adjust the URL based on your backend endpoint
      // Optionally, you can handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating magazines:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create magazines</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
         <input
          type="text"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <select
          value={[publisherId]}
          onChange={(e) => setPublisherId(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        >
          {publishers.map((publisher) => (
            <option key={publisher._id} value={publisher._id}>{publisher._id}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default MagazineCreate;
