"use strict";
const PhoneNumber = require('awesome-phonenumber');
const stringify = require("json-stringify-pretty-compact");

const log = console.log;

// let pn = new PhoneNumber( '0988086692', 'TW' );
let pn = new PhoneNumber('0222867186', 'TW');

pn.toJSON();
log(stringify(pn));

