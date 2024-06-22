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
  },
  available_times: {
    type: [
      {
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
      }
    ],
    required: false
  }
});

module.exports = mongoose.model('Trainer', trainerSchema);