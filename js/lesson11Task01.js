'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get perimeter() {
    return `Периметр = ${((this._width + this._height) * 2) + ' см'}`;
  },

  get area() {
    return `Площадь = ${(this._width * this._height) + ' см'}`;
  },

  set width(value) {
    if (typeof value === 'number') {
      this._width = value;
    }
  },

  set height(value) {
    if (typeof value === 'number') {
      this._height = value;
    }
  },
};

console.log(rectangle.perimeter);
console.log(rectangle.area);
rectangle.width = 10;
console.log(rectangle.perimeter);
console.log(rectangle.area);
