const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  middle_name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true,
    default: 'Общая'
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Trainer', trainerSchema);