/**
 * Counts consonant characters in a string.
 * Connects to: shared validation helpers, shared constants.
 * Created: 2026-06-27
 */
const { LETTER_PATTERN, VOWEL_PATTERN } = require('./shared/constants');
const { requireString } = require('./shared/validation');

/**
 * Counts consonants in the provided string.
 * @param {string} value - The source text.
 * @returns {number} The number of consonants.
 */
function countConsonants(value) {
  return requireString(value, 'countConsonants')
    .split('')
    .filter(
      (character) =>
        LETTER_PATTERN.test(character) && !VOWEL_PATTERN.test(character)
    ).length;
}

module.exports = countConsonants;
