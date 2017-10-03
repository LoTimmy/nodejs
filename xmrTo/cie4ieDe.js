"use strict";
const co = require("co");
const xmr2btc = require("xmrto-api");
const xmrTo = new xmr2btc();
const numeral = require("numeral");
const MaiCoin = require("./MaiCoin");
const request = require("co-request");
const queryString = require("query-string");
const urljoin = require("url-join");
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

const monerohash = co.wrap(function*(address) {
  let obj = { address: address };
  let stringified = queryString.stringify(obj);
  let fullUrl = urljoin(
    "https://monerohash.com",
    "api",
    "stats_address",
    "?" + stringified
  );
  let Muf2aeGh = yield request(fullUrl);
  return Promise.resolve(JSON.parse(Muf2aeGh.body));
});

co(function*() {
  let Kei5Ohph = yield xmrTo.getParams();
  let oonga9Oh = yield MaiCoin.getBitcoinPrice("twd");
  log(
    `XMR = ${Kei5Ohph.price} BTC = NT$${numeral(
      Kei5Ohph.price * oonga9Oh.raw_sell_price / 1e5
    ).format("0,0")}`
  );

  let mymonero = 1.159864210797;

  log(
    `${mymonero} XMR = ${numeral(mymonero * Kei5Ohph.price).format(
      "0,0.00000000"
    )} BTC = NT$${numeral(
      mymonero * Kei5Ohph.price * oonga9Oh.raw_sell_price / 1e5
    ).format("0,0")}`
  );

  let Neubee9E = yield minexmr(
    "47HtbDvpVQwDsiegiDZqYxcQEDZtj3DGxHcdeaqem4jqQxkBQtpxgopUZ5oVg2HaWfTjGye2MBZZJTPvDpeL1Koq5ZtaFH1"
  );

  log(
    `${Neubee9E.stats.balance / 1e12} XMR = ${numeral(
      Neubee9E.stats.balance * Kei5Ohph.price / 1e12
    ).format("0,0.00000000")} BTC = NT$${numeral(
      Neubee9E.stats.balance *
        Kei5Ohph.price /
        1e12 *
        oonga9Oh.raw_sell_price /
        1e5
    ).format("0,0")}`
  );

  let GeCahqu2 = yield monerohash(
    "47HtbDvpVQwDsiegiDZqYxcQEDZtj3DGxHcdeaqem4jqQxkBQtpxgopUZ5oVg2HaWfTjGye2MBZZJTPvDpeL1Koq5ZtaFH1"
  );

  log(
    `${GeCahqu2.stats.balance / 1e12} XMR = ${numeral(
      GeCahqu2.stats.balance * Kei5Ohph.price / 1e12
    ).format("0,0.00000000")} BTC = NT$${numeral(
      GeCahqu2.stats.balance *
        Kei5Ohph.price /
        1e12 *
        oonga9Oh.raw_sell_price /
        1e5
    ).format("0,0")}`
  );
});
