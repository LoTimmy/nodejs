const stripJsonComments = require("strip-json-comments");
const json = '{/*rainbows*/"unicorn":"cake"}';

console.log(JSON.parse(stripJsonComments(json)));
