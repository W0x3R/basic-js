const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let flat = matrix.flat();
  let count = 0;
  for (let i = 0; i < flat.length; i++) {
    if (flat[i] === "^^") {
      console.log((count += 1));
    }
  }
  return count;
}

module.exports = {
  countCats,
};
