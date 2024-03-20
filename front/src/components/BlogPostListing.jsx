import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, deleteBlogPost } from '../services/blogPostService';

const BlogPostListing = () => {
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

  const handleDelete = async (blogPostId) => {
    try {
      await deleteBlogPost(blogPostId);
      // Assuming setBlogPosts is a state update function to update the list of blog posts
      // You need to filter out the deleted blog post from the list
      setBlogPosts(blogPosts.filter(blogPost => blogPost._id !== blogPostId));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  console.log(blogPosts)
  
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
  {blogPosts
    .filter(blogPost => blogPost.author) // Filter out blog posts with no author
    .map(blogPost => (
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
          <div className="text-sm text-gray-800">{blogPost.author._id}</div>
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
