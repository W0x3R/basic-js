const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};
  for (let sub of domains) {
    let rev = sub.split(".").reverse();
    for (let i = 0; i < rev.length; i++) {
      let newArr = "." + rev.slice(0, i + 1).join(".");
      object[newArr] = object[newArr] ? object[newArr] + 1 : 1;
    }
  }
  return object;
}

module.exports = {
  getDNSStats,
};
