const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// const mongoose = require("mongoose");
// const routes = require("./routes");

// Define middleware here
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("cultivate/build"));
}
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Add routes, both API and view
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./cultivate/build/index.html"));
});
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds137281.mlab.com:37281/heroku_dc2h351t");