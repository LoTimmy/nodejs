"use strict";
/*
function factorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    // If the number is 0, its factorial is 1.
    return 1;
  }
  var tmp = num;
  while (num-- > 2) {
    tmp *= num;
  }
  return tmp;
}
*/

function factorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    // If the number is 0, its factorial is 1.
    return 1;
  } else {
    // Otherwise, call this recursive procedure again.
    return num * factorial(num - 1);
  }
}

var result = factorial(8);
console.log(result);
