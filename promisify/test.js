"use strict";

const promisify = require("es6-promisify");
const fs = require("fs");

const stat = promisify(fs.stat);

stat("example.txt")
  .then(stats => {
    console.log("Got stats", stats);
  })
  .catch(err => {
    console.error("Yikes!", err);
  });

