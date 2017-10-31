var mm = require("micromatch");
var jsonfile = require("jsonfile");
var elements = jsonfile.readFileSync("foo.json");

var arr = elements.map(x => {
  return new RegExp(x);
});

console.log(mm(["foobar", "foo", "baz", "bar"], arr));
