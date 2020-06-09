const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user1:password1@ds137281.mlab.com:37281/heroku_dc2h351t"
);

const plantSeed = [
  {
    name: "Potato",
    description: "PO-TAY-TOES. Fry 'em, mash 'em, stick 'em in a stew.",
    season: "Whenever",
    gettingStarted: "Stick potate into ground. Wait for grow.",
    howToMaintain: "Water, I guess?",
    rotate: "Spin dem spuds.",
    //image
  },
  {
    name: "Apple",
    description: "It's all about Fuji, Red Delicious sucks",
    season: "Cold maybe?",
    gettingStarted: "Stick apple into ground. Wait for grow.",
    howToMaintain: "Pray on the solstices!",
    rotate: "Don't spin tree, that gets you b-slapped by Whomping Willow.",
    //image
  },
  {
    name: "Banana",
    description: "What was Beethoven's favorite fruit? BA-NA-NA-NAAAAAAA",
    season: "Hot and humid.",
    gettingStarted: "Put banana stick in ground. Wait for grow.",
    howToMaintain: "PEANUT BUTTER JELLY TIME",
    rotate: "Fear the banana.",
    //image
  }
];

db.Plant
  .remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });