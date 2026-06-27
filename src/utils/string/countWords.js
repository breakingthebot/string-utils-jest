/**
 * Counts normalized words in a string.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Counts words in the provided string.
 * @param {string} value - The source text.
 * @returns {number} The number of words.
 */
function countWords(value) {
  return tokenizeWords(value).length;
}

module.exports = countWords;
