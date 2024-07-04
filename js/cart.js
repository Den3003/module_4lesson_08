'use strict'

const cart = {
  items: [],
  count: 0,


  increaseCount(number) {
    this.count = this.count + number;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, price) => acc + price.itemPrice, 0)
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set totalPrice(value) {},

  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({itemName,itemPrice,itemCount});
    this.increaseCount(itemCount);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  }

}

cart.add('Ручка', 15);
cart.add('Карандаш', 20, 2);
cart.add('Стиралка', 30, 5);


cart.print();
