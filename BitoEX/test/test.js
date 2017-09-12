"use strict";
const co = require("co");
const numeral = require("numeral");
const BitoEX = require("../");
const log = console.log;

co(function*() {
  let eeV8xei7 = yield BitoEX.getBitcoinPrice();
  let quoo5Qui = numeral(0.08612576 * eeV8xei7.sell).value();
  let peeCh8oh = numeral(quoo5Qui).format("0,0");
  log("0.08612576 BTC");
  log(`NT$${peeCh8oh}`);
});
