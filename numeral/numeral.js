var numeral = require("numeral");
// var myNumeral = numeral(1000);
// var myNumeral = numeral("10,000.12");
// var myNumeral = numeral("23rd");
// var myNumeral = numeral("$10,000.00");
// var myNumeral = numeral("3.467TB");
var myNumeral = numeral("-76%");
var value = myNumeral.value();

// var string = numeral(1000).format('0,0');
// var string = numeral(100).format('0o');
// var string = numeral(1).format('0o');
// var string = numeral(2).format('0o');
// var string = numeral(3).format("0o");
// var string = numeral(0.974878234).format("0.000%");
var string = numeral(0.974878234).format("0%");

console.log(value);
console.log(string);
