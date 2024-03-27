import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MagazineEdit = () => {
  const { id } = useParams(); // Extract the blog post ID from the URL params
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [publisher, setPublisher] = useState('');

  useEffect(() => {
    const fetchMagazine = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/magazines/${id}`); // Adjust the URL based on your backend endpoint
        const data = response.data;
        setNumber(data.number);
        setName(data.name);
        setType(data.type);

        setPublisher(data.publisher);
      } catch (error) {
        console.error('Error fetching magazines:', error);
      }
    };
    fetchMagazine();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/magazines/${id}`, { number, name, type, publisher }); // Adjust the URL based on your backend endpoint
    } catch (error) {
      console.error('Error updating magazines:', error);
    }
  };
  

  return (
    <div className="container">
      <h2>Edit magazines</h2>
      <form className="form">

        <div className="form-group">
          <label htmlFor="number">number:</label>
          <input type="number" id="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="type">type:</label>
          <textarea id="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        
        {/* If you want to allow editing the author as well */}
        <div className="form-group">
          <label htmlFor="publisher">publisher:</label>
          <input type="text" id="publisher" className="form-control" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default MagazineEdit;
