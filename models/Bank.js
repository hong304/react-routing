var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: {
      type: String,
      unique: true,
      index: true
  },
  active: Boolean,
  amount: Number
});

module.exports = mongoose.model('account', TodoSchema);
