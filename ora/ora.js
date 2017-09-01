"use strict";
const co = require('co');
const sleep = require('co-sleep');
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

co(function*() {
  // wait for 1000 ms 
  yield sleep(1000);

  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';

  // wait for 1000 ms 
  yield sleep(1000);

  spinner.succeed('succeed');
});
