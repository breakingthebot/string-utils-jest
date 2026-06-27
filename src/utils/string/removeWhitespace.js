/**
 * Removes all whitespace characters from a string.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Removes whitespace from the provided string.
 * @param {string} value - The source text.
 * @returns {string} The compacted string.
 */
function removeWhitespace(value) {
  return requireString(value, 'removeWhitespace').replace(/\s+/g, '');
}

module.exports = removeWhitespace;
