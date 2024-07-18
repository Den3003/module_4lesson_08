'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

  increaseCount(number) {
    this.count += number;
  },

  calculateItemPrice() {
    const itemsPrice = this.items.reduce((acc, price) =>
      acc + price.itemPrice * price.itemCount, 0);

    return (itemsPrice - (itemsPrice / 100 * this._discount)).toFixed(2);
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set discount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
      return;
    }

    if (promocode === 'NEWYEAR') {
      this._discount = 21;
      return;
    }

    this._discount = 0;
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

console.log('cart.discount: ', cart._discount);
cart.discount = 'METHED';
cart.discount = 'yffyjfj';

console.log('cart.discount: ', cart._discount);

cart.print();
