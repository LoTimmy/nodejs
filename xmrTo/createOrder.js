"use strict";
const xmr2btc = require('xmrto-api');
const xmrTo = new xmr2btc();
const log = console.log;

let btc_amount = 0.002;
let btc_dest_address = '1GBUKxPWVyxGaEPSHKtDeQnaRxfnHfSxyb';

xmrTo.createOrder(btc_amount, btc_dest_address)
  .then(function(order) {
    log(order);
  });

/*
{ state: 'TO_BE_CREATED',
  btc_amount: 0.002,
  btc_dest_address: '1GBUKxPWVyxGaEPSHKtDeQnaRxfnHfSxyb',
  uuid: 'xmrto-nECMwB' }
*/
