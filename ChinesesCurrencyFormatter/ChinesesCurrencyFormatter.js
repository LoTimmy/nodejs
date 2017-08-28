'use strict';
const ChinesesCurrencyFormatter = require('chinese-currency-formatter');
const log = console.log;
 
const chsCurrency = ChinesesCurrencyFormatter(987650321.46);

log(chsCurrency);
