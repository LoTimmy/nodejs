var jwt = require("jsonwebtoken");
var token = jwt.sign({ user: "admin" }, "secret123");

console.log(token);
