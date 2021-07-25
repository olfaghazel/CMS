const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const Blog = require('../../models/Blog');
const User = require('../../models/User');

//@route    POST api/blog
//@desc     Create a blog
//@access   Private

router.post(
  '/',
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('content', 'Content is required').not().isEmpty(),
  body('description', 'Descriprion is required').not().isEmpty(),
  body('image', 'Image link is required').not().isEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newBlog = new Blog({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        image: req.body.image,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const blog = await newBlog.save();
      res.json(blog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//@route    GET api/blog
//@desc     Get all blogs
//@access   Public
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route    GET api/blog/:id
//@desc     Get blog by blog id
//@access   Public
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
