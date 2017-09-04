"use strict";
var forIn = require('for-in');
 
var obj = {a: 'foo', b: 'bar', c: 'baz'};
var values = [];
var keys = [];
 
// forIn(obj, function (value, key, o) {
forIn(obj, function (value, key) {
  keys.push(key);
  values.push(value);
});

console.log(keys);
//=> ['a', 'b', 'c']; 
 
console.log(values);
//=> ['foo', 'bar', 'baz']; 

