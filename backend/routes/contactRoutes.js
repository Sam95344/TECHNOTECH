const express = require('express');
const router = express.Router();
const { sendContactMessage } = require('../utils/mailer');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    await sendContactMessage({ name, email, message });
    return res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact send error:', err);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

module.exports = router;
