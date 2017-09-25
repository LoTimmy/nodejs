"use strict";

const request = require("superagent");
const cheerio = require("cheerio");
const S = require("string");

const log = console.log;

request
  // .get('/some-url')
  .end((err, res) => {
    // Do something
    const $ = cheerio.load(res.text);
  });
