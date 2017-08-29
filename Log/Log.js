'use strict';

/*
const Log = require('log'),
  log = new Log('info');
*/

const fs = require('fs'),
  Log = require('log'),
  log = new Log('debug', fs.createWriteStream('my.log'));

log.debug('preparing email');
log.info('sending email');
log.error('failed to send email');

