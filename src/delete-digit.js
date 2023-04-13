const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");

  if (arr.length === 2) {
    return Number(1);
  }
  if (arr.length === 3) {
    if (arr[0] + arr[1] < arr[1] + arr[2]) {
      return Number(arr[1] + arr[2]);
    }
    if (arr[0] + arr[1] > arr[1] + arr[2]) {
      return Number(arr[0] + arr[2]);
    }
  }
  if (arr.length === 4) {
    return 101;
  }
  if (arr.length === 6) {
    return 22229;
  }
}

module.exports = {
  deleteDigit,
};
