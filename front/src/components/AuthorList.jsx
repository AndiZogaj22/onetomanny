import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuthors, deleteAuthor } from '../services/authorService'; // Adjust this import based on your service file path

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };
    fetchAuthors();
  }, []);

  const handleDelete = async (authorId) => {
    try {
      await deleteAuthor(authorId);
      setAuthors(authors.filter(author => author._id !== authorId));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">Authors </h2>
        <Link to="/authors/new" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          New Author
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">
              Author Id
            </th>
            <th scope="col" className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">
              Name
            </th>
            <th scope="col" className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">
              Email
            </th>
            <th scope="col" className="px-4 py-2 text-sm font-medium text-gray-700 uppercase border border-gray-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {authors.map(author => (
            <tr key={author._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <div className="text-xs text-gray-800">{author._id}</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <div className="text-xs text-gray-800">{author.name}</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <div className="text-xs text-gray-800">{author.email}</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap border border-gray-200">
                <Link to={`/authors/edit/${author._id}`} className="text-blue-600 hover:text-blue-800 mr-2">Edit</Link>
                <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
