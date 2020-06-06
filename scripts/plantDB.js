const mongoose = require("mongoose");
const db = require("../models");

// This file dumps the crops on which we will be giving information.

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cultivate"
);

const plantSeed = [
    {
        name: "Fuji Apple",
        description: "The most delicious apple type there is",
        season: "ALL THE TIME",
        gettingStarted: "Put seed in dirt, watch grow.",
        howToMaintain: "Shower it with love",
        rotate: "You only need to spin in place once per day to make the tree happy.",
        // Add in image

    },
    {
        name: "Russet Potato",
        description: "PO-TAY-TOES. Boil 'em, mash 'em, stick 'em in a stew.",
        season: "Apparently stew season",
        gettingStarted: "What's tater's precious?",
        howToMaintain: "Uuuhh....?",
        rotate: "Nah, they're ok.",
        // Add in image

    },
    {
        name: "Blueberries",
        description: "It's a berry. It grows on a bush. Yum.",
        season: "Now?",
        gettingStarted: "Make sure it's chill when you plant it.",
        howToMaintain: "MOAR RAIN",
        rotate: "Bruh, blackberries rotate YOU.",
        // Add in image

    }
]

db.Plant
    .remove({})
    .then(() => db.Plant.collection.insertMany(plantSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });