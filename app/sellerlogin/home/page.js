'use client';

import { useState, useEffect } from 'react';

export default function BlogCreatePage() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(stored);
  }, []);

  const saveToLocalStorage = (updatedBlogs) => {
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const blog = { title, content };

    let updated = [...blogs];
    if (editingIndex !== null) {
      updated[editingIndex] = blog;
    } else {
      updated.push(blog);
    }

    saveToLocalStorage(updated);
    setTitle('');
    setContent('');
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setTitle(blogs[index].title);
    setContent(blogs[index].content);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = blogs.filter((_, i) => i !== index);
    saveToLocalStorage(updated);
    setTitle('');
    setContent('');
    setEditingIndex(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>{editingIndex !== null ? 'Edit Blog' : 'Create Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Save'}</button>
      </form>

      <h3 style={{ marginTop: '30px' }}>All Blogs</h3>
      {blogs.map((blog, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginTop: '10px', padding: '10px' }}>
          <h4>{blog.title}</h4>
          <p>{blog.content}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
