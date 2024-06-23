const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
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
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
    required: true
  },
  members: { 
    type: [
      {
        member: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        }
      }
    ],
    required: true
  }
});

module.exports = mongoose.model('Training', trainingSchema);