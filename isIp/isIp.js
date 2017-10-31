"use strict";
const isIp = require("is-ip");

console.log(isIp("192.168.0.1"));
console.log(isIp("1:2:3:4:5:6:7:8"));
console.log(isIp.v4("1:2:3:4:5:6:7:8"));
