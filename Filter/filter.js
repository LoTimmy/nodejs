'use strict';
const Filter = require('bad-words-chinese'),
  filter = new Filter();
const log = console.log;

log(filter.clean("I'm CEO, Bitch"));
log(filter.clean("我是執行長，婊子"));
log(filter.isProfane("I'm CEO"));
log(filter.isProfane("我是執行長，婊子"));

