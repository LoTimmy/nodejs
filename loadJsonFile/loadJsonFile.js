"use strict";
const co = require("co");
const loadJsonFile = require("load-json-file");
const writeJsonFile = require("write-json-file");

// co(function*() {
//   var json = yield loadJsonFile("foo.json");
//   console.log(json);
//   console.log("done");
// });

(async () => {
  let json = await loadJsonFile("foo.json");
  console.log(json);
  writeJsonFile("test.json", json);
  console.log("done");
})();
