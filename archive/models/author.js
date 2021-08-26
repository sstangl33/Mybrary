// Import mongoose.
const mongoose = require("mongoose");

// Create a schema which is equivalent to a table in sql. The columns of a schema are json objects. There are many configuration options for schema objects, but type and required are two most common options we will use when setting up a schema.
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Export our schema. The parameter for the new model are the name of our model and the model's schema.
module.exports = mongoose.model("Author", authorSchema);
