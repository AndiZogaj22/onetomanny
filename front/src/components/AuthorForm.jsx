// src/components/AuthorForm.js
import React, { useState } from 'react';
import { createAuthor } from '../services/authorService';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthor({ name, email });
      // Optionally, you can handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating author:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div>
      <h2>Create Author</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AuthorForm;
