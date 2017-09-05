"use strict";
var string = "foo💩bar";
var match = string.match(/foo(.)bar/u);
console.log(match[1]);

var regex = /[\u{1F4A9}-\u{1F4AB}]/u;
// The following regex is equivalent.
// var alternative = /[💩-💫]/u;
console.log([
  regex.test("a"), // false
  regex.test("💩"), // true
  regex.test("💪"), // true
  regex.test("💫"), // true
  regex.test("💬") // false
]);
