'use strict';
// const biggestInt = 9007199254740991;
// const biggestInt = Number.MAX_SAFE_INTEGER
const biggestInt = Math.pow(2, 53) - 1;
// const smallestInt = -9007199254740991;
// const smallestInt = Number.MIN_SAFE_INTEGER
const smallestInt = -(Math.pow(2, 53) - 1);

const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
// const negInfiniteNum = Number.NEGATIVE_INFINITY;
// const notANum = Number.NaN;

console.log(biggestInt);
console.log(smallestInt);

console.log(biggestNum);
console.log(smallestNum);
console.log(infiniteNum);

var d = new Date('December 17, 1995 03:24:00');
console.log(Number(d));

console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));

/*
Number.isSafeInteger(Math.pow(2, 53));      // false
Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
*/
