const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.getOwnPropertyNames(date).length > 0 || !date.getTime)
    throw new Error("Invalid date!");
  let getMonth = date.getMonth();
  if (getMonth === 2 || getMonth === 3 || getMonth === 4) {
    return "spring";
  } else if (getMonth === 5 || getMonth === 6 || getMonth === 7) {
    return "summer";
  } else if (getMonth === 8 || getMonth === 9 || getMonth === 10) {
    return "autumn";
  } else if (getMonth === 11 || getMonth === 0 || getMonth === 1) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
