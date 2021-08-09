// Import express.js
const express = require("express");
// Get the express router
const router = express.Router();

// Create the route.
router.get("/", (req, res) => {
  // Send a test response.
  // res.send("Hello World");

  // Render our view.
  res.render("index");
});

// Export our router.
module.exports = router;
