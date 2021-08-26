const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// All Authors Route
router.get("/", async (req, res) => {
  // Create variable to store all of our search objects.
  let searchOptions = {};
  // GET requests send information through the query string, and POST requests send data through the body. Since this is a GET request, we need to search the query (req.query.name).
  // The "i" flag in the Regular Expression makes the search case-insensitive.
  if (req.query.name != null && req.query.name != "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", {
      authors: authors,
      // Send the search options query back to the user to populate the existing author name fields.
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// New Authors Route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create Author Route
router.post("/", async (req, res) => {
  // Test response
  // res.send("Create");
  // Send the body of our form with the name input as a test response.

  // res.send(req.body.name);
  // Create a new Author using the name as a parameter.
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect("authors/new");
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

module.exports = router;
