/**
 * Reverses the character order of a string.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Reverses the provided string.
 * @param {string} value - The source text.
 * @returns {string} The reversed string.
 */
function reverseString(value) {
  return requireString(value, 'reverseString').split('').reverse().join('');
}

module.exports = reverseString;
