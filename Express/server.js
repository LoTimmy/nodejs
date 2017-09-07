'use strict';
// 导入所需模块
const express = require("express");
const path = require('path');

const app = express();

app.use("/", express.static("public"));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.get('/example/a', function (req, res) {
  res.send(req.hostname);
  // res.send('Hello from A!');
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

