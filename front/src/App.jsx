// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorListing from './components/AuthorListing';
import AuthorCreate from './components/AuthorCreate';
import BlogPostListing from './components/BlogPostListing';
import BlogPostCreate from './components/BlogPostCreate';
import AuthorEdit from './components/AuthorEdit'
import BlogPostEdit from './components/BlogPostEdit'

import DepartmentListing from './components/DepartmentListing'
import DepartmentCreate from './components/DepartmentCreate'
import DepartmentEdit from './components/DepartmentEdit'

import EmployeeListing from './components/EmployeeListing'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

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

        <Route path="/departments" element={<DepartmentListing />} />
        <Route path="/departments/new" element={<DepartmentCreate />} />
        <Route path="/departments/edit/:id" element={<DepartmentEdit />} />

        <Route path="/employees" element={<EmployeeListing />} />
        <Route path="/employees/new" element={<EmployeeCreate />} />
        <Route path="/employees/edit/:id" element={<EmployeeEdit />} />


      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
   <div className="flex columns-2 gap-8">
  <div className="row">
    <AuthorListing />
    <BlogPostListing />
  </div>
  <div className="row">
    <DepartmentListing />
    <EmployeeListing />
  </div>
</div>

  );
};

export default App;
