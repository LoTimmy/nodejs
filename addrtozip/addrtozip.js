"use strict";
const addrtozip = require("addrtozip");
addrtozip.find("臺北市南港區園區街3號11樓之3", zipcode => {
  console.log(zipcode);
});

addrtozip.getCities((err, cities) => {
  if (err) {
    throw err;
  }
  console.log(cities);
});

addrtozip.getAreas("台北市", (err, areas) => {
  if (err) {
    throw err;
  }
  console.log(areas);
});
