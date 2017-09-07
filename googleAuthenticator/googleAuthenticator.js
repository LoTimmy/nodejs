"use strict";
const otplib = require("otplib");
const qrcode = require("qrcode");
const authenticator = require("otplib/authenticator");
// const secret = authenticator.generateSecret();
const secret = "KM4FC2ZPM5UEKWTYGUYVE4CSNE4C6T2U";
const token = authenticator.generate(secret);

const otpauth = otplib.authenticator.keyuri("user", "service", secret);

qrcode.toDataURL(otpauth, (err, imageUrl) => {
  if (err) {
    console.log("Error with QR");
    return;
  }
  console.log(imageUrl);
});

console.log(secret);
console.log(token);
