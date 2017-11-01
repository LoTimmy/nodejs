const isUp = require("is-up");

isUp("sindresorhus.com").then(up => {
  console.log(up);
  //=> true
});
