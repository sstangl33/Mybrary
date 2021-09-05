const express = require("express");
const author = require("../models/author");
const router = express.Router();
const Author = require("../models/author");
const Book = require("../models/book");

// All authors route
router.get("/", async (req, res) => {
  // Create variable to store all of our search objects.
  let searchOptions = {};
  // GET requests send information through the query string, and POST requests send data through the body. Since this is a GET request, we need to search the query (req.query.name).
  // The "i" flag in the Regular Expression makes the search case-insensitive.
  if (req.query.name !== "" && req.query.name !== null) {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", {
      authors,
      // Send the search options query back to the user to populate the existing author name fields.
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// Render new authors form route
router.get("/new", async (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create new author route
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.redirect(`authors/${newAuthor.id}`);
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

// Show author route
router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    const books = await Book.find({ author: author.id }).limit(6).exec();
    res.render("authors/show", {
      author: author,
      booksByAuthor: books,
    });
  } catch (err) {
    res.redirect("/");
  }
});

// Edit author route
router.get("/:id/edit", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.render("authors/edit", { author });
  } catch {
    res.redirect("/authors");
  }
});

// Update author route
router.put("/:id", async (req, res) => {
  let author;
  try {
    author = await Author.findById(req.params.id);
    author.name = req.body.name;
    await author.save();
    res.redirect(`/authors/${author.id}`);
  } catch {
    if (author == null) {
      res.redirect("/");
    }
    res.render(`authors/edit`, {
      author,
      errorMessage: "Error Updating Author",
    });
  }
});

// Delete author route
router.delete("/:id", async (req, res) => {
  let author;
  try {
    author = await Author.findById(req.params.id);
    await author.remove();
    res.redirect(`/authors`);
  } catch {
    res.redirect(`/authors/${author.id}`);
  }
});

module.exports = router;
