/**
 * Converts free-form text into camelCase.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Converts a string to camelCase.
 * @param {string} value - The source text.
 * @returns {string} The converted string.
 */
function camelCase(value) {
  const tokens = tokenizeWords(value);

  return tokens
    .map((token, index) => {
      if (index === 0) {
        return token;
      }

      return token[0].toUpperCase() + token.slice(1);
    })
    .join('');
}

module.exports = camelCase;
