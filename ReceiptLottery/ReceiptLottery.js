'use strict';
const ReceiptLottery = require('receipt-lottery-taiwan');
const stringify = require("json-stringify-pretty-compact");
const log = console.log;
const error = console.error;

ReceiptLottery.query(function(err, info) {
  if (err) {
    error(err.stack);
    return;
  }

  log(stringify(info, null, 2));
});

