"use strict";
const randomUser = require("random-user");
const jsome = require("jsome");

randomUser("simple")
  // .then(data => console.log(data))
  .then(data => jsome(data))
  .catch(err => console.log(err));

randomUser()
  // .then(data => console.log(data))
  .then(data => jsome(data))
  .catch(err => console.log(err));
