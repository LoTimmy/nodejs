'use strict';
const SHA256 = require("crypto-js/sha256");
const log = console.log;

log(SHA256("Message").toString());

