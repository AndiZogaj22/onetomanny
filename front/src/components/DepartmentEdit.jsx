import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DepartmentEdit = () => {
  const { id } = useParams(); // Extract the author ID from the URL params
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/departments/${id}`); // Adjust the URL based on your backend endpoint
        const department = response.data;
        setName(department.name);
        setNumber(department.number);
      } catch (error) {
        console.error('Error fetching department:', error);
      }
    };
    fetchDepartment();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/departments/${id}`, { name, number }); // Adjust the URL based on your backend endpoint
    } catch (error) {
      console.error('Error updating departments:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit departments</h2>
      <form className="form">

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="number">number:</label>
          <input type="number" id="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default DepartmentEdit;
