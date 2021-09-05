// Import mongoose.
const mongoose = require("mongoose");
const Book = require("./book");

// Define schema. A schema which is equivalent to a table in sql. The columns of a schema are json objects. There are many configuration options for schema objects, but type and required are two most common options we will use when setting up a schema.
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Safe-guard to prevent an author from being removed if they still have books in the database.
authorSchema.pre("remove", function (next) {
  Book.find({ author: this.id }, (err, books) => {
    if (err) {
      next(err);
    } else if (books.length > 0) {
      next(new Error("This author still has books."));
    } else {
      next();
    }
  });
});

// Compile and export model (I like how this is combined into one line. Colt's class separates this into two lines.) The parameters for the new model are the name of our model and the model's schema.
module.exports = mongoose.model("Author", authorSchema);
