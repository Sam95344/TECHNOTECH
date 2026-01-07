const express = require('express');
const Certificate = require('../models/Certificate');

const router = express.Router();

// Verify certificate
router.get('/verify/:certificateNumber', async (req, res) => {
  try {
    const certificate = await Certificate.findOne({ certificateNumber: req.params.certificateNumber });
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Generate certificate (admin)
router.post('/generate', async (req, res) => {
  try {
    const { certificateNumber, studentName, course, completionDate, grade, duration } = req.body;
    if (!certificateNumber) {
      return res.status(400).json({ message: 'Certificate number is required.' });
    }
    const certificate = new Certificate({
      certificateNumber,
      studentName,
      course,
      completionDate,
      grade,
      duration
    });
    
    const savedCertificate = await certificate.save();
    res.status(201).json(savedCertificate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all certificates (admin)
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;