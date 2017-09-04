"use strict";
const co = require('co');
const request = require("co-request");
const queryString = require('query-string');
const urljoin = require('url-join');
const stringify = require("json-stringify-pretty-compact");

(function(exports) {
  // 公司基本資料
  exports.Aiphie8i = co.wrap(function*(Business_Accounting_NO) {
    let obj = {
      $format: 'json',
      // $format: 'xml',
      $filter: 'Business_Accounting_NO eq ' + Business_Accounting_NO // 統一編號
    };
    let stringified = queryString.stringify(obj);
    let fullUrl = urljoin('http://data.gcis.nat.gov.tw/od/data/api', '5F64D864-61CB-4D0D-8AD9-492047CC1EA6', '?' + stringified);
    let thah5Tee = yield request.get({
      url: fullUrl,
      json: false
    });

    // Business_Accounting_NO 統一編號
    // Company_Status_Desc 公司狀況
    // Company_Name 公司名稱
    // Capital_Stock_Amount 資本總額(元)
    // Paid_In_Capital_Amount 實收資本額(元)
    // Responsible_Name 代表人姓名
    // Company_Location 公司所在地
    // Register_Organization_Desc 登記機關
    // Company_Setup_Date 核准設立日期
    // Change_Of_Approval_Data 最後核准變更日期

    return Promise.resolve(stringify(JSON.parse(thah5Tee.body)));
  });

  // 所營事業資料
  exports.Bay6hohz = co.wrap(function*(Business_Accounting_NO) {
    let obj = {
      $format: 'json',
      // $format: 'xml',
      $filter: 'Business_Accounting_NO eq ' + Business_Accounting_NO
    };
    let stringified = queryString.stringify(obj);
    let fullUrl = urljoin('http://data.gcis.nat.gov.tw/od/data/api', '236EE382-4942-41A9-BD03-CA0709025E7C', '?' + stringified);
    let thah5Tee = yield request.get({
      url: fullUrl,
      json: false
    });

    return Promise.resolve(stringify(JSON.parse(thah5Tee.body)));
  });

  // 董監事資料
  exports.Cie5za2o = co.wrap(function*(Business_Accounting_NO) {
    let obj = {
      $format: 'json',
      // $format: 'xml',
      $filter: 'Business_Accounting_NO eq ' + Business_Accounting_NO
    };
    let stringified = queryString.stringify(obj);
    let fullUrl = urljoin('http://data.gcis.nat.gov.tw/od/data/api', '4E5F7653-1B91-4DDC-99D5-468530FAE396', '?' + stringified);
    let thah5Tee = yield request.get({
      url: fullUrl,
      json: false
    });

    // Person_Position_Name 職稱
    // Person_Name 姓名
    // Juristic_Person_Name 所代表法人
    // Person_Shareholding 持有股份數

    return Promise.resolve(stringify(JSON.parse(thah5Tee.body)));
  });

  exports.DoB7coo4 = co.wrap(function*(Responsible_Name) {
    let obj = {
      $format: 'json',
      // $format: 'xml',
      $filter: 'Responsible_Name eq ' + Responsible_Name
    };

    let stringified = queryString.stringify(obj);
    let fullUrl = urljoin('http://data.gcis.nat.gov.tw/od/data/api', '4B61A0F1-458C-43F9-93F3-9FD6DA5E1B08', '?' + stringified);
    let thah5Tee = yield request.get({
      url: fullUrl,
      json: false
    });

    return Promise.resolve(stringify(JSON.parse(thah5Tee.body)));
  });

}(this));

