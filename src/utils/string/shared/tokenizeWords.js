/**
 * Normalizes arbitrary text into lowercase word tokens for case conversion utilities.
 * Connects to: camelCase.js, kebabCase.js, snakeCase.js, slugify.js, toTitleCase.js.
 * Created: 2026-06-27
 */
const {
  NON_ALPHANUMERIC_BOUNDARY_PATTERN,
  WORD_SEPARATOR_PATTERN,
} = require('./constants');
const { requireString } = require('./validation');

/**
 * Splits a string into normalized lowercase word tokens.
 * @param {string} value - The source text.
 * @returns {string[]} The normalized tokens.
 */
function tokenizeWords(value) {
  return requireString(value, 'tokenizeWords')
    .trim()
    .replace(NON_ALPHANUMERIC_BOUNDARY_PATTERN, ' ')
    .split(WORD_SEPARATOR_PATTERN)
    .filter(Boolean)
    .map((token) => token.toLowerCase());
}

module.exports = {
  tokenizeWords,
};
