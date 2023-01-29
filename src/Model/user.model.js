const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true , required:true },
  password: { type: String },
});

module.exports = mongoose.model("user", userSchema);

// {
// "first_name":"rajkumar12",
// "last_name":"eassy",
// "email":"a@gmail.com",
// "password":"1231"
// }