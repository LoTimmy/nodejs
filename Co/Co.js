"use strict";
const co = require("co");

co(function*() {
  var result = yield Promise.resolve(true);
  return result;
}).then(
  value => {
    console.log(value);
  },
  err => {
    console.error(err.stack);
  }
);
