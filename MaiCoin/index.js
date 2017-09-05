"use strict";
const co = require("co");
const request = require("co-request");
const urljoin = require("url-join");
const Cache = require("cache-storage");
const FileStorage = require("cache-storage/Storage/FileSyncStorage");

var cache = new Cache(new FileStorage("./temp"), "namespace");

const a = [
  "raw_sell_price_in_twd",
  "raw_buy_price_in_twd",
  "raw_price_in_twd",
  "formatted_sell_price_in_twd",
  "formatted_buy_price_in_twd",
  "formatted_price_in_twd"
];

(function(exports) {
  // Get Ethereum Price
  exports.getEthereumPrice = co.wrap(function*(currency) {
    var data = cache.load("eth-" + currency + "Ahgh6Eph");

    if (data == undefined) {
      // handle miss!

      let fullUrl = urljoin(
        "https://www.maicoin.com/api/prices",
        "eth-" + currency
      );
      let thah5Tee = yield request.get({
        url: fullUrl,
        json: true
      });

      a.forEach(function(element) {
        delete thah5Tee.body[element];
      });

      data = cache.save(currency + "Ahgh6Eph", thah5Tee.body, {
        expire: {
          minutes: 1
        }
      });

      return Promise.resolve(data);
    } else {
      return Promise.resolve(data);
    }
  });

  // Get Currencies
  exports.getCurrencies = co.wrap(function*() {
    var data = cache.load("Quai1Iey");

    if (data == undefined) {
      let fullUrl = urljoin("https://api.maicoin.com/v1/currencies");
      let thah5Tee = yield request.get({
        url: fullUrl,
        json: true
      });

      data = cache.save("Quai1Iey", thah5Tee.body);

      return Promise.resolve(data);
    } else {
      return Promise.resolve(data);
    }
  });

  // Get Bitcoin Price
  exports.getBitcoinPrice = co.wrap(function*(currency) {
    var data = cache.load("btc-" + currency + "Tho6ieng");

    if (data == undefined) {
      // handle miss!

      /*
      let obj = { currency: currency };
      let stringified = queryString.stringify(obj);
      let fullUrl = urljoin('https://api.maicoin.com/v1/prices', '?' + stringified);
      */

      let fullUrl = urljoin(
        "https://www.maicoin.com/api/prices",
        "btc-" + currency
      );
      let thah5Tee = yield request.get({
        url: fullUrl,
        json: true
      });

      a.forEach(function(element) {
        delete thah5Tee.body[element];
      });

      data = cache.save(currency + "Tho6ieng", thah5Tee.body, {
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
