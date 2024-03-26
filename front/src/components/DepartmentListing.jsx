import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DepartmentListing = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/departments'); // Adjust the URL based on your backend endpoint
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departmens:', error);
      }
    };
    fetchDepartments();
  }, []);

  const handleDelete = async (departmentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/departments/${departmentId}`);
      setDepartments(departments.filter(department => department._id !== departmentId));
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Error deleting departments:', error);
    }
  };
  

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">departments</h2>
        <Link to="/departments/new" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          New departments
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">department Id</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">Name</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">number</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">Actions</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {departments.map(department => (
            <tr key={department._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{department._id}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{department.name}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">{department.number}</td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <Link to={`/departments/edit/${department._id}`} className="text-blue-600 hover:text-blue-800 mr-2">Edit</Link>
                <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(department._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentListing;
