const express = require('express');
const router = express.Router();
const { sendContactMessage } = require('../utils/mailer');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Contact form received:', { name, email, messageLength: message?.length });
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    await sendContactMessage({ name, email, message });
    console.log('Contact email sent successfully to careerstechnotech@gmail.com');
    return res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact send error:', err.message, err);
    return res.status(500).json({ success: false, message: 'Failed to send message: ' + err.message });
  }
});

module.exports = router;
