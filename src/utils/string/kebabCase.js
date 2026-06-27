/**
 * Converts free-form text into kebab-case.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Converts a string to kebab-case.
 * @param {string} value - The source text.
 * @returns {string} The converted string.
 */
function kebabCase(value) {
  return tokenizeWords(value).join('-');
}

module.exports = kebabCase;
