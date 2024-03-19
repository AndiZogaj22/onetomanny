import React, { useState, useEffect } from 'react';
import { getBlogPosts } from '../services/blogPostService';

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await getBlogPosts();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map(blogPost => (
          <li key={blogPost._id}>
            {blogPost.title} - {blogPost.content} - Author ID: {blogPost.author._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
