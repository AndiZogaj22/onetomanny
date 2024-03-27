import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PublisherListing = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/publishers'); // Adjust the URL based on your backend endpoint
        setPublishers(response.data);
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    };
    fetchPublishers();
  }, []);

  const handleDelete = async (publisherId) => {
    try {
      await axios.delete(`http://localhost:5000/api/publishers/${publisherId}`);
      setPublishers(publishers.filter(publisher => publisher._id !== publisherId));
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };
  

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">publishers</h2>
        <Link to="/publishers/new" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          New publisher
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">publisher Id</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">Name</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">surname</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">birthYear</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">Actions</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publishers.map(publisher => (
            <tr key={publisher._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{publisher._id}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{publisher.name}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{publisher.surname}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{publisher.birthYear}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <Link to={`/publishers/edit/${publisher._id}`} className="text-blue-600 hover:text-blue-800 mr-2">Edit</Link>
                <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(publisher._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublisherListing;
