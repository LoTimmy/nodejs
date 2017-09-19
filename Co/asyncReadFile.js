"use strict";

const fs = require("fs");

function asyncReadFile(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

asyncReadFile("temp.txt", "utf8")
  .then(data => {
    console.log(data);
    return asyncReadFile("Rahchee9.txt", "utf8");
  })
  .then(data => {
    console.log(data);
  });
