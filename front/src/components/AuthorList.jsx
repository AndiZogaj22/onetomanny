// src/components/AuthorList.js
import React, { useState, useEffect } from 'react';
import { getAuthors } from '../services/authorService';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map(author => (
          <li key={author._id}>{author.name} - {author.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
