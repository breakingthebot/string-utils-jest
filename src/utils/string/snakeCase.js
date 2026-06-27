/**
 * Converts free-form text into snake_case.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Converts a string to snake_case.
 * @param {string} value - The source text.
 * @returns {string} The converted string.
 */
function snakeCase(value) {
  return tokenizeWords(value).join('_');
}

module.exports = snakeCase;
