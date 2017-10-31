"use strict";
var randomstring = require("randomstring");

console.log(randomstring.generate());

console.log(randomstring.generate(7));

console.log(
  randomstring.generate({
    length: 12,
    charset: "alphabetic"
  })
);

console.log(
  randomstring.generate({
    charset: "abc"
  })
);
