/**
 * Converts a string into title case.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Converts a string to title case.
 * @param {string} value - The source text.
 * @returns {string} The title-cased string.
 */
function toTitleCase(value) {
  return tokenizeWords(value)
    .map((token) => token[0].toUpperCase() + token.slice(1))
    .join(' ');
}

module.exports = toTitleCase;
