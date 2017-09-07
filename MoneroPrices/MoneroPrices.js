"use strict";
const MoneroPrices = require("monero-prices");
let currencyCode = "TWD";
currencyCode = currencyCode || "BTC";

const log = console.log;

MoneroPrices.get(currencyCode).then(
  rate =>
    log(
      "1 XMR equals " + rate.fiatBased + " " + currencyCode.toUpperCase() + "\n"
    ),
  err => log(err.message + "\n")
);
