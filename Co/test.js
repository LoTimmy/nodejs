"use strict";
const co = require("co");

const readFile = co.wrap(function*(path) {
  return yield require("thunkify")(require("fs").readFile)(path, "utf8");
});

const sleep = co.wrap(function*(ms) {
  return yield require("thunkify")((ms, cb) => {
    setTimeout(cb, ms);
  })(ms);
});

readFile("temp.txt")
  .then(data => {
    console.log(data);
    return sleep(1000);
  })
  .then(() => {
    return readFile("Rahchee9.txt");
  })
  .then(data => {
    console.log(data);
  });
