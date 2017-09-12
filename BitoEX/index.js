"use strict";
const co = require("co");
const request = require("co-request");
const urljoin = require("url-join");
const Cache = require("cache-storage");
const FileStorage = require("cache-storage/Storage/FileSyncStorage");

var cache = new Cache(new FileStorage("./temp"), "namespace");

(function(exports) {
  // Get Bitcoin Price
  exports.getBitcoinPrice = co.wrap(function*() {
    var data = cache.load("Xae1Eac3");

    if (data == undefined) {
      // handle miss!

      let fullUrl = urljoin("https://www.bitoex.com/api/v1/get_rate");
      let thah5Tee = yield request.get({
        url: fullUrl,
        json: true
      });

      data = cache.save("Xae1Eac3", thah5Tee.body, {
        expire: {
          minutes: 1
        }
      });

      return Promise.resolve(data);
    } else {
      return Promise.resolve(data);
    }
  });
})(this);
