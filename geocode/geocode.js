"use strict";

const request = require("superagent");
const urljoin = require("url-join");
const queryString = require("query-string");
const stringify = require("json-stringify-pretty-compact");

const log = console.log;

let obj = {
  address: "美麗華摩天",
  sensor: false,
  language: "zh-TW"
};

let stringified = queryString.stringify(obj);
let fullUrl = urljoin(
  "http://maps.googleapis.com/maps/api/geocode/json",
  "?" + stringified
);

request.get(fullUrl).end((err, res) => {
  // Do something
  var jsontext = res.text;
  var jsonObj = JSON.parse(jsontext);
  log(stringify(jsonObj));
});
