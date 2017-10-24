'use strict';
const solarLunar = require('solarLunar')
const log = console.log;

let solar2lunarData = solarLunar.solar2lunar(1977, 10, 12);
let lunar2solarData = solarLunar.lunar2solar(1977, 8, 30);
// log(solar2lunarData);
log(lunar2solarData);

