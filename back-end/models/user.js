const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
});

module.exports = mongoose.model('User', userSchema);
