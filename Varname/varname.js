'use strict';
const varname = require('varname');

const camelback = varname.camelback;
const camelcase = varname.camelcase;
const dash = varname.dash;
const underscore = varname.underscore;
const log = console.log;

log(camelback('Hello World'));
log(camelcase('foo_bar_baz'));

