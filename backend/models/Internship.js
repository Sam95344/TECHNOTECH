const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Remote', 'On-site', 'Hybrid']
  },
  duration: {
    type: String,
    required: true
  },
  stipend: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Internship', internshipSchema);