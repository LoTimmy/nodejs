var Promise = require("bluebird");
var fs = require("fs");
Promise.promisifyAll(fs);

fs
  .readFileAsync("package.json", "utf8")
  .then(contents => {
    console.log(contents);
  })
  .catch(e => {
    console.error(e.stack);
  });
