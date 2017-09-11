"use strict";
const co = require("co");
// const stringify = require("json-stringify-pretty-compact");
const numeral = require("numeral");
const MaiCoin = require("../");
const log = console.log;

co(function*() {
  /*
    log(stringify(yield MaiCoin.getEthereumPrice('twd')));
    log(stringify(yield MaiCoin.getEthereumPrice('usd')));
    log(stringify(yield MaiCoin.getBitcoinPrice('twd')));
    log(stringify(yield MaiCoin.getCurrencies()));
  */
  let oonga9Oh = yield MaiCoin.getEthereumPrice("twd");
  let uY8ao6So = numeral(0.22766623 * oonga9Oh.raw_sell_price)
    .divide(100000)
    .value();
  let chuXeer7 = numeral(uY8ao6So).format("0,0");
  log("0.22766623 ETH");
  log(`NT$${chuXeer7}`);

  let eeV8xei7 = yield MaiCoin.getBitcoinPrice("twd");
  let quoo5Qui = numeral(0.08612576 * eeV8xei7.raw_sell_price)
    .divide(100000)
    .value();
  let peeCh8oh = numeral(quoo5Qui).format("0,0");
  log("0.08612576 BTC");
  log(`NT$${peeCh8oh}`);
});
