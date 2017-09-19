"use strict";
const co = require("co");
// const numeral = require("numeral");
const request = require("co-request");
const queryString = require("query-string");
const urljoin = require("url-join");
const moment = require("moment");
const log = console.log;

const minexmr = co.wrap(function*(address) {
  let obj = { address: address };
  let stringified = queryString.stringify(obj);
  let fullUrl = urljoin(
    "http://api.minexmr.com:8080",
    "stats_address",
    "?" + stringified
  );
  let Muf2aeGh = yield request(fullUrl);
  return Promise.resolve(JSON.parse(Muf2aeGh.body));
});

co(function*() {
  let Neubee9E = yield minexmr(
    "47HtbDvpVQwDsiegiDZqYxcQEDZtj3DGxHcdeaqem4jqQxkBQtpxgopUZ5oVg2HaWfTjGye2MBZZJTPvDpeL1Koq5ZtaFH1"
  );

  log(`Address: 47HtbDvpVQwDsiegiDZqYxcQEDZtj3DGxHcdeaqem4jqQxkBQtpxgopUZ5oVg2HaWfTjGye2MBZZJTPvDpeL1Koq5ZtaFH1
Pending Balance: ${Neubee9E.stats.balance / 1e12} XMR
Last Share Submitted: ${moment.unix(Neubee9E.stats.lastShare).format("LLLL")}
Total Paid: ${Neubee9E.stats.paid / 1e12} XMR
Hash Rate: ${Neubee9E.stats.hashrate} H/sec
  `);
});
