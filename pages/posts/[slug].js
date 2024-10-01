// pages/posts/[slug].js
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>
        <h3>Company Details</h3>
        <p>Location: {post.companyDetails.location}</p>
        <p>Staff: {post.companyDetails.staffInfo.join(', ')}</p>
        <p>Social Media: {post.companyDetails.socialMedia.join(', ')}</p>
      </div>
      {post.images && post.images.map((img, index) => <img key={index} src={img} alt="proof" />)}
    </div>
  );
};

// Get all available slugs for static generation
export async function getStaticPaths() {
  const res = await axios.get('https://your-backend-api.com/api/posts');
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },  // slug must match the dynamic part [slug]
  }));

  return { paths, fallback: true };
}

// Fetch the individual post data for each page based on slug
export async function getStaticProps({ params }) {
  const res = await axios.get(`https://your-backend-api.com/api/posts/${params.slug}`);
  const post = res.data;
  return { props: { post } };
}

export default PostDetails;