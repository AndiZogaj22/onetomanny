// const API_URL = 'http://localhost:5000/api/blogposts';

// export const getBlogPosts = async () => {
//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     throw new Error('Failed to fetch blog posts');
//   }
//   return response.json();
// };

// export const getBlogPost = async (blogPostId) => {
//   const response = await fetch(`${API_URL}/${blogPostId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch blog post');
//   }
//   return response.json();
// };

// export const createBlogPost = async (blogPostData) => {
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPostData),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to create blog post');
//   }
//   return response.json();
// };

// export const updateBlogPost = async (blogPostData) => {
//   const response = await fetch(`${API_URL}/${blogPostData._id}`, {
//     method: 'PUT', // or 'PATCH' depending on your backend implementation
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPostData),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to update blogpost ');
//   }
//   return response.json();
// };

// export const deleteBlogPost = async (blogPostId) => {
//   const response = await fetch(`${API_URL}/${blogPostId}`, {
//     method: 'DELETE',
//   });
//   if (!response.ok) {
//     throw new Error('Failed to delete blog post');
//   }
// };
