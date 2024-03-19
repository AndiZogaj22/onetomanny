// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import BlogPostList from './components/BlogPostList';
import BlogPostForm from './components/BlogPostForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/new" element={<AuthorForm />} />
        <Route path="/blogposts" element={<BlogPostList />} />
        <Route path="/blogposts/new" element={<BlogPostForm />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="flex columns-2 gap-8 ">
      <h1>Listing</h1>
      <div>
        <Link to="/authors" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Authors List</Link>
      </div>
      <div>
        <Link to="/blogposts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Blog Posts List</Link>
      </div>
<div>Creating</div>

<div>
        <Link to="/authors/new" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">New Authors </Link>
      </div>
      <div>
        <Link to="/blogposts/new" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">New Blog Posts</Link>
      </div>
    </div>
  );
};

export default App;
