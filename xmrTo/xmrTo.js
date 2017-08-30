"use strict";
const xmr2btc = require('xmrto-api');
const xmrTo = new xmr2btc();
const log = console.log;

xmrTo.getParams()
  .then(function(params) {
    log(params);
  });

