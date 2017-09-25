"use strict";
const co = require("co");

let resolveAfter2Seconds = x => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
};

let numbers = [1, 5, 10, 15];

co(function*() {
  var doubles = yield numbers.map(function(x) {
    return resolveAfter2Seconds(x * 2);
  });

  console.log(doubles);
});
