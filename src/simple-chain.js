const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(place) {
    if (!this.arr[place - 1]) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(place - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const res = this.arr.join("~~");
    this.arr = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
