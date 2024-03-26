import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeEdit = () => {
  const { id } = useParams(); // Extract the blog post ID from the URL params
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`); // Adjust the URL based on your backend endpoint
        const data = response.data;
        setName(data.name);
        setSurname(data.surname);
        setBirthYear(data.birthYear);

        setDepartment(data.department);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/employees/${id}`, { name, surname,birthYear, department }); // Adjust the URL based on your backend endpoint
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
  

  return (
    <div className="container">
      <h2>Edit emplyee</h2>
      <form className="form">

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="birthYear">birthyear:</label>
          <textarea id="birthyear" className="form-control" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        </div>
        
        {/* If you want to allow editing the author as well */}
        <div className="form-group">
          <label htmlFor="department">department:</label>
          <input type="text" id="department" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
