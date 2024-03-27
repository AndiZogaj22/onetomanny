import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PublisherEdit = () => {
  const { id } = useParams(); // Extract the author ID from the URL params
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  useEffect(() => {
    const fetchPublisher = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/publishers/${id}`); // Adjust the URL based on your backend endpoint
        const publisher = response.data;
        setName(publisher.name);
        setSurname(publisher.surname);
        setBirthYear(publisher.birthYear);
      } catch (error) {
        console.error('Error fetching publisher:', error);
      }
    };
    fetchPublisher();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/publishers/${id}`, { name, surname, birthYear }); // Adjust the URL based on your backend endpoint
    } catch (error) {
      console.error('Error updating publishers:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit publishers</h2>
      <form className="form">

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="surname">surname:</label>
          <input type="text" id="surname" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="birthYear">birthYear:</label>
          <input type="date" id="birthYear" className="form-control" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default PublisherEdit;
