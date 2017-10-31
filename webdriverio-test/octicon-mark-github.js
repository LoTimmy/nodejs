var webdriverio = require("webdriverio");
var options = { desiredCapabilities: { browserName: "chrome" } };
var client = webdriverio.remote(options);
client
  .init()
  .url("http://github.com")
  .getViewportSize()
  .then(function(size) {
    console.log(size);
  })
  .getElementSize(".octicon-mark-github")
  .then(function(size) {
    console.log(size);
  })
  .end();
