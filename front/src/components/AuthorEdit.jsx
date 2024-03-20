import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthors, updateAuthor } from '../services/authorService';

const AuthorEdit = () => {
  const { id } = useParams(); // Extract the author ID from the URL params
  const [author, setAuthor] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const authors = await getAuthors();
        const foundAuthor = authors.find(a => a._id === id);
        setAuthor(foundAuthor);
        setName(foundAuthor.name);
        setEmail(foundAuthor.email);
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };
    fetchAuthor();
  }, [id]);

  const handleSave = async () => {
    try {
      await updateAuthor({ _id: id, name, email });
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };
  

  return (
    <div className="container">
      <h2>Edit Author</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default AuthorEdit;
