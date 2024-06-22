const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  active_member: {
    type: Boolean,
    required: true
  },
  member_since: {
    type: Date,
    required: false,
    default: Date.now
  }
});

module.exports = mongoose.model('Member', memberSchema)