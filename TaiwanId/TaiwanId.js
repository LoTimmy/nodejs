'use strict';
const TaiwanId = require('taiwan-id');
const log = console.log;

log(TaiwanId.check('A123456789'));

let randomId = TaiwanId.generate();
TaiwanId.check(randomId); // true 
log(randomId);

