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
  specialty: {
    type: String,
    required: true,
    default: 'Общая'
  }
});

module.exports = mongoose.model('Trainer', trainerSchema);