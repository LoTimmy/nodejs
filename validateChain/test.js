"use strict";
var VC = require("validate-chain");

var objectData = {
  age: 22,
  name: "eisneim",
  gender: "guy",
  email: "ss.kjk",
  nested: { a: { b: { v: 33 } } }
};

var vc = new VC(objectData);
vc
  .check("email")
  .email()
  .check("desc")
  .alias("描述")
  .required()
  .check("opt")
  .optional()
  .max(2, "must not bigger than 2");

vc
  .check("name")
  .required("名字为必填项")
  .$apply(value => {
    // 自定义的判断逻辑
    return value && value.length > 2;
  }, "名字的长度至少两个字符");

vc
  .check("age")
  .required()
  .min(23)
  .numeric()
  .in([22, 33, 44]); //可以一直链下去

vc
  .check("gender")
  .alias("性别")
  .regx(/male|female/)
  .in(["男", "女"]);

vc.check("nested.a.b.v").max(30);
console.log(vc.sanitized);
console.log(vc.errors);
