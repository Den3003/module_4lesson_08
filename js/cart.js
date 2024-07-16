'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    let itemsPrice = this.items.reduce((acc, price) =>
      acc + price.itemPrice, 0);

    if (this.discount === 15) {
      itemsPrice -= (itemsPrice * 0.15);
    }
    if (this.discount === 21) {
      itemsPrice -= (itemsPrice * 0.21);
    }

    return itemsPrice;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({itemName, itemPrice, itemCount});
    this.increaseCount(itemCount);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },

};

cart.add('Ручка', 15);
cart.add('Карандаш', 20, 2);
cart.add('Стиралка', 30, 5);

console.log('cart.discount: ', cart.discount);
cart.setDiscount = 'METHED';
console.log('cart.discount: ', cart.discount);

cart.print();
