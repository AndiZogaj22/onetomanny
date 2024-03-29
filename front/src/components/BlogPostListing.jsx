import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPostListing = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogposts'); // Adjust the URL based on your backend endpoint
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogPosts();
  }, []);

  const handleDelete = async (blogPostId) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogposts/${blogPostId}`); // Adjust the URL based on your backend endpoint
      setBlogPosts(blogPosts.filter(blogPost => blogPost._id !== blogPostId));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold mb-2">Blog Posts</h2>
      <div className="mb-2">
        <Link to="/blogposts/new" className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          New Blog Post
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Blog Post Id
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Title
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Content
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Author ID
              </th>
              <th className="px-2 py-1 text-sm font-medium text-gray-700 uppercase border border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map(blogPost => (
              <tr key={blogPost._id} className="hover:bg-gray-50">
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{blogPost._id}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{blogPost.title}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <div className="text-sm text-gray-800">{blogPost.content}</div>
                </td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
  <div className="text-sm text-gray-800">{blogPost.author ? blogPost.author._id : "Author has been deleted"}</div>
</td>
                <td className="px-2 py-1 whitespace-nowrap border border-gray-200">
                  <Link to={`/blogposts/edit/${blogPost._id}`} className="text-blue-600 hover:text-blue-800 mr-1">Edit</Link>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(blogPost._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogPostListing;
