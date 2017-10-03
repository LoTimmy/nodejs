"use strict";
const getJSON = require("get-json");
/*
{ CO: '0.32',
  County: '基隆市',
  FPMI: '2',
  MajorPollutant: '',
  NO: '1.26',
  NO2: '15',
  NOx: '16.12',
  O3: '12',
  PM10: '25',
  'PM2.5': '16',
  PSI: '29',
  PublishTime: '2017-08-02 01:00',
  SiteName: '基隆',
  SO2: '3.3',
  Status: '良好',
  WindDirec: '240',
  WindSpeed: '1.9' }
*/

getJSON("http://opendata2.epa.gov.tw/AQX.json", (error, response) => {
  // console.log(response);
  console.log(response[0].County);
  console.log(response[0]["PM2.5"]);
  // console.log(JSON.parse(response));
  // console.log(JSON.stringify(JSON.parse(response)));
  // console.log(error);
});
