const mysql = require("mysql2/promise");
const bluebird = require("bluebird");

mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "geipho3a",
    database: "menagerie",
    Promise: bluebird
  })
  .then(conn => {
    var result = conn.query("select * from t1");
    conn.end();
    return result;
  })
  .then(([rows, fields]) => console.log(rows[0]));
