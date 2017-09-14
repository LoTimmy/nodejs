"use strict";

require("getmac").getMac((err, macAddress) => {
  if (err) {
    throw err;
  }
  console.log(`Ethernet Address: ${macAddress}`);
});
