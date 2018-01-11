"use strict";
var p1 = Promise.resolve(3);
var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
var p3 = new Promise(resolve => {
  setTimeout(resolve, 1000, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
