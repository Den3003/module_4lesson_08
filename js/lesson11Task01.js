'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get perimeterRectangle() {
    return `Периметр = ${((this.width + this.height) * 2) + ' см'}`;
  },

  get areaRectangle() {
    return `Площадь = ${(this.width * this.height) + ' см'}`;
  },

  set widthRectangle(value) {
    if (typeof value === 'number') {
      this.width = value;
    }
  },

  set heightRectangle(value) {
    if (typeof value === 'number') {
      this.height = value;
    }
  },
};

console.log(rectangle.perimeterRectangle);
console.log(rectangle.areaRectangle);
rectangle.widthRectangle = 10;
console.log(rectangle.perimeterRectangle);
console.log(rectangle.areaRectangle);
