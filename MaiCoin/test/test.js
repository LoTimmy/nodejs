'use strict';
const co = require('co');
// const stringify = require("json-stringify-pretty-compact");
const numeral = require('numeral');
const MaiCoin = require("../");
const log = console.log;

co(function*() {
  /*
    log(stringify(yield MaiCoin.getEthereumPrice('twd')));
    log(stringify(yield MaiCoin.getEthereumPrice('usd')));
    log(stringify(yield MaiCoin.getBitcoinPrice('twd')));
    log(stringify(yield MaiCoin.getCurrencies()));
  */
  let oonga9Oh = yield MaiCoin.getEthereumPrice('twd');
  let uY8ao6So = numeral(0.22766623 * oonga9Oh.raw_sell_price).divide(100000).value();
  let chuXeer7 = numeral(uY8ao6So).format('0,0');
  log(chuXeer7);
});
