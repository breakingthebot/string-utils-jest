/**
 * Counts vowel characters in a string.
 * Connects to: shared validation helpers, shared constants.
 * Created: 2026-06-27
 */
const { VOWEL_PATTERN } = require('./shared/constants');
const { requireString } = require('./shared/validation');

/**
 * Counts vowels in the provided string.
 * @param {string} value - The source text.
 * @returns {number} The number of vowels.
 */
function countVowels(value) {
  return requireString(value, 'countVowels')
    .split('')
    .filter((character) => VOWEL_PATTERN.test(character)).length;
}

module.exports = countVowels;
