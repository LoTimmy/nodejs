"use strict";
const varname = require("varname");

const camelback = varname.camelback;
const camelcase = varname.camelcase;
const split = varname.split;
const dash = varname.dash;
const underscore = varname.underscore;
const log = console.log;

var string1 = "Hello World";
log(camelback(string1));
var string2 = "foo_bar_baz";
log(camelcase(string2));
