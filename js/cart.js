'use strict'

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice
  },

  increaseCount(number) {
    this.count = this.count + number;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, price) => acc + price.itemPrice, 0)
  },

  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({itemName,itemPrice,itemCount});
    this.increaseCount(itemCount);
    this.calculateItemPrice();
    this.getTotalPrice();
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  }

}