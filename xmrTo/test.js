"use strict";
const co = require("co");
const xmr2btc = require("xmrto-api");
const xmrTo = new xmr2btc();
const numeral = require("numeral");
const MaiCoin = require("MaiCoin");
const log = console.log;

xmrTo.getParams().then(params => {
  co(function*() {
    log(params.price);
    let uY8ao6So = 0.657545525797 * params.price;
    log(uY8ao6So);
    let oonga9Oh = yield MaiCoin.getBitcoinPrice("twd");
    let fie2HahP = numeral(uY8ao6So * oonga9Oh.raw_sell_price)
      .divide(100000)
      .value();
    log(fie2HahP);
  });
});
