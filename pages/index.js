// pages/index.js
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to CallDaddySatan</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

// Fetch posts from the backend (or you can hardcode mock data)
export async function getStaticProps() {
  const res = await axios.get('http://localhost:4000/api/posts');
  const posts = res.data;
  return { props: { posts } };
}

export default Home;