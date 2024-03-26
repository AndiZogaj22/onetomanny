import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeListing = () => {
  const [employees, setEmployees] = useState([]);
  const [birthYearFilter, setBirthYearFilter] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesResponse = await axios.get('http://localhost:5000/api/employees');
        setEmployees(employeesResponse.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (birthYearFilter) {
      const filtered = employees.filter(employee => employee.birthYear.includes(birthYearFilter));
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  }, [birthYearFilter, employees]);

  const handleFilter = (event) => {
    setBirthYearFilter(event.target.value);
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold mb-2">Employees</h2>
     
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Birth Year to Filter"
          value={birthYearFilter}
          onChange={handleFilter}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <Link to="/employees/new" className="bg-green-500 text-white px-4 py-2 mb-6 mt-6 rounded hover:bg-green-600">
          New Employees
        </Link>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Employee Id
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Name
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Surname
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Birth Year
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Department Name
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmployees.map(employee => (
              <tr key={employee._id} className="hover:bg-gray-50">
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{employee._id}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{employee.name}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{employee.surname}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{employee.birthYear}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{employee.department ? employee.department.name : "department has been deleted"}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <Link to={`/employees/edit/${employee._id}`} className="text-blue-600 hover:text-blue-800 mr-1">Edit</Link>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(employee._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListing;
