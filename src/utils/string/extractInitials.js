/**
 * Extracts uppercase initials from a name or phrase.
 * Connects to: shared tokenization helper.
 * Created: 2026-06-27
 */
const { tokenizeWords } = require('./shared/tokenizeWords');

/**
 * Extracts initials from the provided string.
 * @param {string} value - The source text.
 * @returns {string} The uppercase initials.
 */
function extractInitials(value) {
  return tokenizeWords(value)
    .map((token) => token[0].toUpperCase())
    .join('');
}

module.exports = extractInitials;
