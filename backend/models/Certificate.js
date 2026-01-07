const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateNumber: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  completionDate: {
    type: Date,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    default: 'N/A'
  },
  issuedBy: {
    type: String,
    default: 'TechNotech Solution Pvt. Ltd.'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Certificate', certificateSchema);