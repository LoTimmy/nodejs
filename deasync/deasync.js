var fs = require("fs");
var deasync = require("deasync");

var read = deasync(fs.readFile);

console.log(read("package.json", "utf8"));

console.log('done');

