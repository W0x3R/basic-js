const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActivityNumber = sampleActivity;
  if (sampleActivityNumber <= 0 || sampleActivityNumber > 15) {
    return false;
  } else if (typeof sampleActivityNumber !== "string") {
    return false;
  } else if (isNaN(sampleActivityNumber)) {
    return false;
  } else {
    let active = Math.log(MODERN_ACTIVITY / sampleActivityNumber);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let res = Math.ceil(active / k);
    return String(res);
  }
}

module.exports = {
  dateSample,
};
