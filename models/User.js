const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  facebookId: String,
  photo: String,
})

module.exports = mongoose.model('User', UserSchema)
