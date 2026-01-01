const express = require('express');
const router = express.Router();
// bcrypt removed: using plain password
const jwt = require('jsonwebtoken');

// Hardcoded admin credentials (replace with a database model in a real application)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';

// @route   POST api/admin/login
// @desc    Admin login
// @access  Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('--- Admin Login Attempt ---');
  console.log(`Received username: "${username}" (length: ${username.length})`);
  console.log(`Received password: "${password}" (length: ${password.length})`);
  console.log(`Expected username: "${ADMIN_USERNAME}" (length: ${ADMIN_USERNAME.length})`);
  console.log(`Expected password: "${ADMIN_PASSWORD}" (length: ${ADMIN_PASSWORD.length})`);
  console.log('---');

  try {
    // Check if user exists
    if (username !== ADMIN_USERNAME) {
      console.log('Username does not match.');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }


    // Validate password (plain text)
    if (password !== ADMIN_PASSWORD) {
      console.log('Password does not match.');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log('Credentials match. Generating token...');

    // Create and sign a JWT
    const payload = {
      user: {
        id: 'admin' // Or a unique ID from your database
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;