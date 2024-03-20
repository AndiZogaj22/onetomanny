// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorListing from './components/AuthorListing';
import AuthorCreate from './components/AuthorCreate';
import BlogPostListing from './components/BlogPostListing';
import BlogPostCreate from './components/BlogPostCreate';
import AuthorEdit from './components/AuthorEdit'
import BlogPostEdit from './components/BlogPostEdit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorListing />} />
        <Route path="/authors/new" element={<AuthorCreate />} />
        <Route path="/authors/edit/:id" element={<AuthorEdit />} />


        <Route path="/blogposts" element={<BlogPostListing />} />
        <Route path="/blogposts/new" element={<BlogPostCreate />} />
        <Route path="/blogposts/edit/:id" element={<BlogPostEdit />} />

      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="flex columns-2 gap-8 ">
     <AuthorListing />
     <BlogPostListing />
    </div>
  );
};

export default App;
