'use strict';

const mothersDay = require("mothers-day");
const moment = require('moment');
const log = console.log;

moment.locale('zh-tw');
log(moment(mothersDay(2016)).format('L'));
log(moment(mothersDay(2017)).format('L'));

// log(mothersDay(2016));
// log(mothersDay(2017));

