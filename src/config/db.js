const mongoose = require("mongoose");
require("dotenv").config();

// Get the connection string from the env file

const connectionUri = process.env.CONNECTION_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionUri);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("db not connected...", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
