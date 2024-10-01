// pages/admin/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:4000/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:4000/api/posts/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;