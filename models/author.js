const mongoose = require("mongoose");

// Define schema
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Compile and export model (I like how this is combined into one line. Colt's class separates this into two lines.)
module.exports = mongoose.model("Author", authorSchema);
