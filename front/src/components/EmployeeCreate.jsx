import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeCreate = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/departments'); // Adjust the URL based on your backend endpoint
        setDepartments(data);
        if (data.length > 0) {
          // Set default author ID to the first author in the list
          setDepartmentId(data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching department:', error);
      }
    };
    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', { name, surname,birthYear, department: departmentId }); // Adjust the URL based on your backend endpoint
      // Optionally, you can handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating employee:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
         <input
          type="date"
          placeholder="birthyear"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        />
        <select
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
        >
          {departments.map((department) => (
            <option key={department._id} value={department._id}>{department._id}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
