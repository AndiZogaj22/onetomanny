// src/services/blogPostService.js
const API_URL = 'http://localhost:5000/api/blogposts';

export const getBlogPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
};

export const createBlogPost = async (blogPostData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogPostData),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog post');
  }
  return response.json();
};
