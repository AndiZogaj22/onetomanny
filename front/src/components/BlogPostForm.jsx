import React, { useState, useEffect } from 'react';
import { createBlogPost } from '../services/blogPostService';
import { getAuthors } from '../services/authorService';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
        if (data.length > 0) {
          // Set default author ID to the first author in the list
          setAuthorId(data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };
    fetchAuthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlogPost({ title, content, author: authorId });
      // Optionally, you can handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div>
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          {authors.map((author) => (
            <option key={author._id} value={author._id}>{author._id}</option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
