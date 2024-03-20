// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import BlogPostList from './components/BlogPostList';
import BlogPostForm from './components/BlogPostForm';
import AuthorEdit from './components/AuthorEdit'
import BlogPostEdit from './components/BlogPostEdit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/new" element={<AuthorForm />} />
        <Route path="/authors/edit/:id" element={<AuthorEdit />} />


        <Route path="/blogposts" element={<BlogPostList />} />
        <Route path="/blogposts/new" element={<BlogPostForm />} />
        <Route path="/blogposts/edit/:id" element={<BlogPostEdit />} />

      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="flex columns-2 gap-8 ">
     <AuthorList />
     <BlogPostList />
    </div>
  );
};

export default App;
