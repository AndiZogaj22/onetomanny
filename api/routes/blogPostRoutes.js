const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author');
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one blog post
router.get('/:id', getBlogPost, (req, res) => {
  res.json(res.blogPost);
});

// Create a blog post
router.post('/', async (req, res) => {
  const blogPost = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  try {
    const newBlogPost = await blogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a blog post
router.patch('/:id', getBlogPost, async (req, res) => {
  if (req.body.title != null) {
    res.blogPost.title = req.body.title;
  }
  if (req.body.content != null) {
    res.blogPost.content = req.body.content;
  }
  try {
    const updatedBlogPost = await res.blogPost.save();
    res.json(updatedBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog post
router.delete('/:id', getBlogPost, async (req, res) => {
  try {
    await res.blogPost.remove();
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get blog post by ID
async function getBlogPost(req, res, next) {
  let blogPost;
  try {
    blogPost = await BlogPost.findById(req.params.id);
    if (blogPost == null) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.blogPost = blogPost;
  next();
}

module.exports = router;
