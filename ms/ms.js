"use strict";
const ms = require("ms");

console.log(ms("2 days"));
console.log(ms("1d"));
console.log(ms("10h"));
console.log(ms("2.5 hrs"));
console.log(ms("2h"));
console.log(ms("1m"));
console.log(ms("5s"));
console.log(ms("1y"));
console.log(ms("100"));

console.log(ms(60000));
console.log(ms(2 * 60000));
console.log(ms(ms("10 hours")));

console.log(ms(60000, { long: true })); // "1 minute"
console.log(ms(2 * 60000, { long: true })); // "2 minutes"
console.log(ms(ms("10 hours"), { long: true })); // "10 hours"
