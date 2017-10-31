"use strict";

const sortKeys = require("sort-keys");

console.log(sortKeys({c: 0, a: 0, b: 0}));
console.log(sortKeys({b: {b: 0, a: 0}, a: 0}, {deep: true}));
console.log(
  sortKeys(
    {c: 0, a: 0, b: 0},
    {
      compare: (a, b) => -a.localeCompare(b)
    }
  )
);
