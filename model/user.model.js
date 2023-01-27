const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: { 
      type: String, 
      required: true, 
  },
  difficulty: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
