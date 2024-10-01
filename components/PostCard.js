// components/PostCard.js
import React from 'react';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link href={`/posts/${post.slug}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default PostCard;