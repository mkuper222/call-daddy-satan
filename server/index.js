const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const Post = require('./models/Post');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calldaddysatan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes for managing posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

app.delete('/api/posts/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

app.listen(4000, () => console.log('Server running on port 4000'));