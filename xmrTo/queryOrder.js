"use strict";
const xmr2btc = require('xmrto-api');
const xmrTo = new xmr2btc();
const log = console.log;

var uuid = 'xmrto-fFh6yK';

xmrTo.queryOrder(uuid)
  .then(function(order) {
    log(order);
  });

/*
{ xmr_price_btc: 0.025,
  uuid: 'xmrto-nECMwB',
  state: 'UNPAID',
  btc_amount: 0.002,
  btc_dest_address: '1GBUKxPWVyxGaEPSHKtDeQnaRxfnHfSxyb',
  xmr_required_amount: 0.08,
  xmr_receiving_address: '44TVPcCSHebEQp4LnapPkhb2pondb2Ed7GJJLc6TkKwtSyumUnQ6QzkCCkojZycH2MRfLcujCM7QR1gdnRULRraV4UpB5n4',
  xmr_receiving_integrated_address: '4EAAQR1vtv7EQp4LnapPkhb2pondb2Ed7GJJLc6TkKwtSyumUnQ6QzkCCkojZycH2MRfLcujCM7QR1gdnRULRraV67K93YsMsPiKfCUUR5',
  xmr_required_payment_id_long: '43c65fc205d8107d5b48d0879c94f306efad82addd56e169cc601d6f5b8e521c',
  xmr_required_payment_id_short: '8b33e0c2bd6f4da5',
  created_at: '2017-08-30T01:27:33Z',
  expires_at: '2017-08-30T01:42:33Z',
  seconds_till_timeout: 825,
  xmr_amount_total: 0.08,
  xmr_amount_remaining: 0.08,
  xmr_num_confirmations_remaining: -1,
  xmr_recommended_mixin: 4,
  btc_num_confirmations_before_purge: 144,
  btc_num_confirmations: 0,
  btc_transaction_id: '' }
*/
