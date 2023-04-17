const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function repeat(string, separator, repeatTimes) {
    return string
      .concat(separator)
      .repeat(repeatTimes)
      .slice(0, -separator.length);
  }
  let string = String(str),
    addition = "";
  if (!options) return string;
  if (typeof options.addition != "undefined") {
    addition = repeat(
      String(options.addition),
      options.additionSeparator || "|",
      options.additionRepeatTimes || 1
    );
  }
  return repeat(
    string.concat(addition),
    options.separator || "+",
    options.repeatTimes || 1
  );
}

module.exports = {
  repeater,
};
