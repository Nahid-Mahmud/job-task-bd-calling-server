const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photoURL: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
