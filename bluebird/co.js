var mysql = require('mysql2');
var co = require('co');
var squel = require('squel');

co(function*() {
  var c = yield mysql.createConnectionPromise({
    host: 'localhost',
    user: 'root',
    password: 'geipho3a',
    database: 'menagerie',
  });

  console.log(yield c.query('SHOW DATABASES'));

  var s = squel
    .select()
    .function('NOW()', 'NOW')
    .toString();

  console.log(yield c.query(s));

  yield c.end();
});
