const API_URL = 'http://localhost:5000/api/authors';

export const getAuthors = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
};

export const createAuthor = async (authorData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authorData),
  });
  if (!response.ok) {
    throw new Error('Failed to create author');
  }
  return response.json();
};

export const updateAuthor = async (authorData) => {
  const response = await fetch(`${API_URL}/${authorData._id}`, {
    method: 'PUT', // or 'PATCH' depending on your backend implementation
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authorData),
  });
  if (!response.ok) {
    throw new Error('Failed to update author');
  }
  return response.json();
};

export const deleteAuthor = async (authorId) => {
  const response = await fetch(`${API_URL}/${authorId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete author');
  }
};
