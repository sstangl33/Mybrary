// Import express.js
const express = require("express");
// Get the express router
const router = express.Router();
const Book = require("../models/book");

// Create the route.
router.get("/", async (req, res) => {
  let books;
  try {
    books = await Book.find().sort({ createAt: "desc" }).limit(10).exec();
  } catch {
    books = [];
  }
  // Render our view.
  res.render("index", { books: books });
});

// Export our router.
module.exports = router;
