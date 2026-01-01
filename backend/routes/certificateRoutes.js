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
    const { studentName, course, completionDate, grade } = req.body;
    const certificateNumber = 'CERT' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
    
    const certificate = new Certificate({
      certificateNumber,
      studentName,
      course,
      completionDate,
      grade
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