const express = require('express');
const Internship = require('../models/Internship');

const router = express.Router();
// Apply for internship (no email, just success response)
router.post('/apply', async (req, res) => {
  try {
    const { name, domain, resume } = req.body;
    if (!name || !domain || !resume) {
      return res.status(400).json({ message: 'Name, domain, and resume are required.' });
    }
    // Email sending removed
    res.json({ message: 'Application received successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process application', error: error.message });
  }
});

// Get all internships
router.get('/', async (req, res) => {
  try {
    const internships = await Internship.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single internship
router.get('/:id', async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create internship
router.post('/', async (req, res) => {
  try {
    const { title, type, duration, stipend, description } = req.body;
    const internship = new Internship({
      title,
      type,
      duration,
      stipend,
      description
    });
    const savedInternship = await internship.save();
    res.status(201).json(savedInternship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update internship
router.put('/:id', async (req, res) => {
  try {
    const { title, type, duration, stipend, description, isActive } = req.body;
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      { title, type, duration, stipend, description, isActive },
      { new: true }
    );
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json(internship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete internship
router.delete('/:id', async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.json({ message: 'Internship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;