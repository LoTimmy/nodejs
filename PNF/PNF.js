"use strict";
const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const log = console.log;

/*
var phoneNumber = phoneUtil.parse('202-456-1414', 'US');
console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
*/
let phoneNumber = phoneUtil.parse('0988-086-692', 'TW');
log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));


