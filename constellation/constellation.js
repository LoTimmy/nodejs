'use strict';

const constellation = require("node-constellation");
const cons1 = constellation(2, 16, "zh-cn");
const cons2 = constellation(8, 29, "en");
const cons3 = constellation(10, 12, "zh-tw");
const log = console.log;

log(cons1);
log(cons2);
log(cons3);
