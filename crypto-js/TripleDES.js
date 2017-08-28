'use strict';
const TripleDES = require("crypto-js/tripledes");
const CryptoJS = require("crypto-js");
const log = console.log;

// Encrypt
var encrypted = TripleDES.encrypt("Message", "Secret Passphrase");

// Decrypt
var decrypted = TripleDES.decrypt(encrypted, "Secret Passphrase");
var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

log(encrypted.toString());
log(plaintext);

