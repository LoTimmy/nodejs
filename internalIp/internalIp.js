"use strict";
const internalIp = require("internal-ip");

internalIp.v6().then(ip => {
  console.log(ip);
  //=> 'fe80::1'
});

internalIp.v4().then(ip => {
  console.log(ip);
  //=> '10.0.0.79'
});
