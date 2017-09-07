"use strict";
const co = require("co");
const ipLocator = require("ip-locator");
const thunkify = require("thunkify");

const getDomainOrIPDetails = thunkify(ipLocator.getDomainOrIPDetails);

co(function*() {
  let data = yield getDomainOrIPDetails("128.199.76.145", "json");
  console.log(data);
});

