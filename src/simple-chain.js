const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   arr: [],
//   getLength() {
//     return this.arr.length;
//   },
//   addLink(v) {
//     this.arr.push(`( ${v} )`);
//     return this;
//   },
//   removeLink(p) {
//     if (!this.arr[p - 1]) {
//       this.arr = [];
//       throw new Error("You can't remove incorrect link!");
//     }
//     this.arr.splice(p - 1, 1);
//     return this;
//   },
//   reverseChain() {
//     this.arr.reverse();
//     return this;
//   },
//   finishChain() {
//     const res = this.arr.join("~~");
//     this.arr = [];
//     return res;
//   },
// };
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(v) {
    this.arr.push(`( ${v} )`);
    return this;
  },
  removeLink(p) {
    if (!this.arr[p - 1]) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(p - 1, 1);
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
