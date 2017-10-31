"use strict";
const dateTime = require("date-time");
console.log(dateTime());
console.log(dateTime({date: new Date(1989, 2, 4, 10)}));
console.log(dateTime({showTimeZone: true}));
console.log(dateTime({local: false}));
console.log(dateTime({local: false, showTimeZone: true}));
console.log(dateTime({showMilliseconds: true}));
