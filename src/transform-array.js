const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let empArr = [];
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (arr.length > i + 1) i++;
        break;
      case "--discard-prev":
        if (empArr.length > 0 && empArr[empArr.length - 1] === arr[i - 1])
          empArr.pop();
        break;
      case "--double-next":
        if (arr.length > i + 1) empArr.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (arr[i - 1] && arr[i - 2] != "--discard-next")
          empArr.push(arr[i - 1]);
        break;
      default:
        empArr.push(arr[i]);
    }
  }
  return empArr;
}

// let transform = function (arr) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '--discard-next') {
//             let result = arr.slice(0, i) + "," + arr.slice(i + 2);
//             let newArray = result;
//             return newArray;
//         } else if (arr[i] === '--discard-prev') {
//             let result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
//             let newArray = result;
//             return newArray;
//         } else if (arr[i] === '--double-next') {
//             let result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
//             let newArray = result;
//             return newArray;
//         } else if (arr[i] === '--double-prev') {
//             let result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
//             let newArray = result;

//             return newArray;
//         }
//     }
// };

module.exports = {
  transform,
};
