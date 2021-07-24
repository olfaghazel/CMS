const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

//@route    POST api/user
//@desc     Register user
//@access   Public

router.post(
  '/',
  body('firstName', 'First name is required').not().isEmpty(),
  body('lastName', 'Last name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
    'password',
    'Please enter a password with 8 or more characters'
  ).isLength({ min: 8 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      //See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //Get users gravitor
      const avatar = gravatar.url(email, { s: 200, r: 'pg', d: 'mm' });

      user = new User({
        firstName,
        lastName,
        email,
        avatar,
        password,
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      console.log(err);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET  api/user/me
// @desc     Get current user profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const myProfile = await Person.findOne({
      user: req.user.id,
    }).populate('user', ['avatar', 'firstName', 'lastName', 'email']);
    if (!myProfile) {
      res.status(400).json({ message: 'There is no profile for this user' });
    }
    res.json(myProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
