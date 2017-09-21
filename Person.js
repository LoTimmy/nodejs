"use strict";
var util = require("util");

// 建構函式 (Constructor)
function Person() {
  this.name = "N/A";
}

// Method
Person.prototype.SetName = function(name) {
  this.name = name;
};

// Method
Person.prototype.getSex = function() {
  return this.sex;
};

// Method
Person.prototype.greet = function() {
  console.log("Hi, I am " + this.name);
};

// Method
Person.prototype.SayHello = function() {
  console.log("Hello, World!");
};

var Employee = function(name, title, sex, age) {
  Person.call(this);
  this.name = name;
  this.title = title;
  this.sex = sex;
  this.age = age;
};

var Customer = function(name) {
  Person.call(this);
  this.name = name;
};

util.inherits(Employee, Person);
util.inherits(Customer, Person);

Employee.prototype.greet = function() {
  console.log("Hi, I am " + this.name + ", the " + this.title);
};

var bob = new Employee("Bob", "Builder", "male", 33);
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Handyman");

bob.greet();
rg.greet();
