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

import PublisherCreate from './components/PublisherCreate'
import PublisherListing from './components/PublisherListing'
import PublisherEdit from './components/PublisherEdit'

import MagazineCreate from './components/MagazineCreate'
import MagazineListing from './components/MagazineListing'
import MagazineEdit from './components/MagazineEdit'

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


        <Route path="/publishers" element={<PublisherListing />} />
        <Route path="/publishers/new" element={<PublisherCreate />} />
        <Route path="/publishers/edit/:id" element={<PublisherEdit />} />

        <Route path="/magazines" element={<MagazineListing />} />
        <Route path="/magazines/new" element={<MagazineCreate />} />
        <Route path="/magazines/edit/:id" element={<MagazineEdit />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="flex flex-col gap-8">
      <div class=" p-4">
        <AuthorListing />
      </div>
      <div class="p-4">
        <BlogPostListing />
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div class="p-4">
        <DepartmentListing />
      </div>
      <div class=" p-4">
        <EmployeeListing />
      </div>
    </div>


    <div class="flex flex-col gap-8">
      <div class="p-4">
        <PublisherListing />
      </div>
      <div class=" p-4">
       <MagazineListing />
      </div>
    </div>
  </div>
  

  );
};

export default App;
