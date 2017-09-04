"use strict";
const RegexChain = require('regex-chain');
const containsNumbers = new RegexChain(/[0-9]/);
const containsLetters = new RegexChain(/[a-zA-Z]/);

const log = console.log;

log("asdf09 contains letters and numbers: " + containsLetters.and(containsNumbers).test("asdf09"));
log("asdf contains letters and numbers: " + containsLetters.and(containsNumbers).test("asdf"));

