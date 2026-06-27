/**
 * Converts free-form text into a URL-friendly slug.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Converts a string to kebab-separated lowercase slug format.
 * @param {string} value - The source text.
 * @returns {string} The generated slug.
 */
function slugify(value) {
  return tokenizeWords(value).join('-');
}

module.exports = slugify;
