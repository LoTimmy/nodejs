'use strict';

const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");
const log = console.log;

// Encrypt 
var ciphertext = AES.encrypt('my message', 'secret key 123');

// Decrypt 
var bytes = AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

log(ciphertext.toString());
log(plaintext);

