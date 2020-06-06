const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user1:password1@ds137281.mlab.com:37281/heroku_dc2h351t"
);

const plantSeed = [
  {
    name: "",
    description: "",
    sseason: "",
    gettingStarted: "",
    howToMaintain: "",
    rotate: "",
    //image
  },
  {
    name: "",
    description: "",
    sseason: "",
    gettingStarted: "",
    howToMaintain: "",
    rotate: "",
    //image
  },
  {
    name: "",
    description: "",
    sseason: "",
    gettingStarted: "",
    howToMaintain: "",
    rotate: "",
    //image
  },
  {
    name: "",
    description: "",
    sseason: "",
    gettingStarted: "",
    howToMaintain: "",
    rotate: "",
    //image
  },
  {
    name: "",
    description: "",
    sseason: "",
    gettingStarted: "",
    howToMaintain: "",
    rotate: "",
    //image
  },

];

db.Plant
  .remove({})
  .then(() => db.Book.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });