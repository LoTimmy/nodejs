var webdriverio = require("webdriverio");
var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

var browser = webdriverio.remote(options);
browser
  .init()
  .url("https://www.whatismybrowser.com/")
  .getText(".string-major")
  .then(result => {
    console.log(result);
  })
  .saveScreenshot("./snapshot.png")
  .url("http://www.google.com")
  .getTitle()
  .then(title => {
    console.log("Title was: " + title);
  })
  .end();

/*
var browser = webdriverio.remote(options);
browser
  .init()
  .url("http://www.google.com")
  .getTitle()
  .then(title => {
    console.log("Title was: " + title);
  })
  .end();
*/

/*
webdriverio
  .remote(options)
  .init()
  .url("http://www.google.com")
  .getTitle()
  .then(function(title) {
    console.log("Title was: " + title);
  })
  .end();
*/
