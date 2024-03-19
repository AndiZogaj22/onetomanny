// models/blogPost.js

const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
}, { collection: 'my_custom_blog_posts' }); // Specify custom collection name

module.exports = mongoose.model('BlogPost', blogPostSchema);
