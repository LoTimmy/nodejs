"use strict";
const _ = require("lodash");
var users = [
  {
    user: "alice",
    active: true,
    name: "Alice Appleworth",
    telephone: "123-456-7890"
  },
  {
    user: "bob",
    active: true,
    name: "Bob Bananarama",
    telephone: "987-654-3210"
  },
  { user: "barney", active: true, age: 36 },
  { user: "fred", active: false, age: 40 },
  { user: "pebbles", active: false, age: 1 }
];

console.log(
  _(users)
    .chain()
    .filter("age")
    .sortBy("age")
    .map(function(o) {
      // return o.user + " is " + o.age;
      return `${o.user} is ${o.age}`;
    })
    .reverse()
    .value()
);
