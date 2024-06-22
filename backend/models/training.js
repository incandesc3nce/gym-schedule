const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
    required: true
  },
  members: { 
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
      }
    ],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Training', trainingSchema);