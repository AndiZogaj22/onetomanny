const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one author
router.get('/:id', getAuthor, (req, res) => {
  res.json(res.author);
});

// Create an author
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
    email: req.body.email
  });
  try {
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an author
router.patch('/:id', getAuthor, async (req, res) => {
  if (req.body.name != null) {
    res.author.name = req.body.name;
  }
  if (req.body.email != null) {
    res.author.email = req.body.email;
  }
  try {
    const updatedAuthor = await res.author.save();
    res.json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an author
router.delete('/:id', getAuthor, async (req, res) => {
  try {
    await res.author.remove();
    res.json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get author by ID
async function getAuthor(req, res, next) {
  let author;
  try {
    author = await Author.findById(req.params.id);
    if (author == null) {
      return res.status(404).json({ message: 'Author not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.author = author;
  next();
}

module.exports = router;