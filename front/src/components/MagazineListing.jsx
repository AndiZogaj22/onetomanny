import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MagazineListing = () => {
  const [magazines, setMagazines] = useState([]);
  
  const [typeFilter, settypeFilter] = useState('');
  const [filteredMagazines, setFilteredMagazines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const magazinesResponse = await axios.get('http://localhost:5000/api/magazines');
        setMagazines(magazinesResponse.data);
      } catch (error) {
        console.error('Error fetching magazines:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeFilter) {
      const filtered = magazines.filter(magazine => magazine.type.includes(typeFilter));
      setFilteredMagazines(filtered);
    } else {
      setFilteredMagazines(magazines);
    }
  }, [typeFilter, magazines]);

  const handleFilter = (event) => {
    settypeFilter(event.target.value);
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold mb-2">magazines</h2>
     
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter type to Filter"
          value={typeFilter}
          onChange={handleFilter}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <Link to="/magazines/new" className="bg-green-500 text-white px-4 py-2 mb-6 mt-6 rounded hover:bg-green-600">
          New magazines
        </Link>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
              magazines Id
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                number
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                name
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
               type
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                publisher Name
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMagazines.map(magazine => (
              <tr key={magazine._id} className="hover:bg-gray-50">
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{magazine._id}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{magazine.number}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{magazine.name}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{magazine.type}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{magazine.publisher ? magazine.publisher.name : "publisher has been deleted"}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <Link to={`/magazines/edit/${magazine._id}`} className="text-blue-600 hover:text-blue-800 mr-1">Edit</Link>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(magazine._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MagazineListing;
