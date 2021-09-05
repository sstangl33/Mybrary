// Check if this application is running locally or on a server. Loads the local environment variables if the application is running locally.
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import express from the express library.
const express = require("express");
// Import the express layout package.
const expressLayouts = require("express-ejs-layouts");
// Import the method-override package.
const methodOverride = require("method-override");
// Import mongoose.
const mongoose = require("mongoose");
// Create an express app.
const app = express();

// Require the router file for our server. The import path must be a relative link.
const indexRouter = require("./routes/index");
// Create router for the authors
const authorRouter = require("./routes/authors");
// Create router for the books
const bookRouter = require("./routes/books");

// Configure the express application:
// Set the view engine to ejs.
app.set("view engine", "ejs");
// Set the source for our views to the views directory.
app.set("views", __dirname + "/views");
// Hook-up express layouts
app.set("layout", "layouts/layout");

// Use body-parser
app.use(express.urlencoded({ limit: "10mb", extended: false }));
// Use express layouts for our express application.
app.use(expressLayouts);
// Use as the source for our public files (stylesheets, javascript, images, etc.)
app.use(express.static("public"));
app.use(methodOverride("_method"));
// Use the router defined by the indexRouter variable we set above. The first parameter is route path of our application.
app.use("/", indexRouter);
// Use the authorRouter. Point the first parameter to the authors folder instead of the root.
app.use("/authors", authorRouter);
// Use the bookRouter. Pointer the first parameter to the books folder instead of the root.
app.use("/books", bookRouter);

// Connect our database. IMPORTANT: Never hard-code your db link because it will change depending on if the application is running on your dev environment or the production server. Instead, it better to pass a string into the connect function that will come from your environment variable.
// The { useNewUrlParser: true } parameter is required to use the new Mongoose URL String parser.
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Determine if we are connected to our mongo database.
const db = mongoose.connection;
// Print an error message if the connection fails.
db.on("error", (error) => console.error(error));
// Print a success messages if the connection is successful.
db.once("open", () => console.log("Connected to Mongoose"));

// Listen to the port in our environment variable when deployed or port 3000 when developing.
app.listen(process.env.PORT || 3000);
