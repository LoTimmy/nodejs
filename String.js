"use strict";
var s1 =
  "中文 español deutsch English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית";
var who = "world";

/*
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
*/

let longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";

console.log(longString);
console.log(s1);
console.log(`hello ${who}`);
console.log("cat"[1]);
console.log("cat".charAt(1));
