"use strict";

const fs = require("fs");

fs.readFile("temp.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
