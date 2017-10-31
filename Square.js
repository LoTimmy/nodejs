"use strict";

class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

class Rectangle {}

let p = new Polygon(300, 400);
p.sayName();
console.log(`The width of this polygon is ${p.width}`);

let s = new Square(5);
s.sayName();
console.log(`The area of this square is ${s.area}`);
console.log(`The width of this square is ${s.width}`);
console.log(`The height of this square is ${s.height}`);
