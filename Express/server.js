"use strict";
// 导入所需模块
const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

const app = express();

app.use(morgan("combined", { stream: accessLogStream }));

app.use("/", express.static("public"));
app.use(
  "/bower_components",
  express.static(path.join(__dirname, "bower_components"))
);

app.get("/example/a", function(req, res) {
  res.send(req.hostname);
  // res.send('Hello from A!');
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Example app listening on port 3000!");
});
