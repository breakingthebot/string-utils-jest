/**
 * Checks whether a string contains a target substring.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Tests whether a source string contains a substring.
 * @param {string} value - The source text.
 * @param {string} substring - The substring to locate.
 * @returns {boolean} True when the substring exists.
 */
function containsSubstring(value, substring) {
  return requireString(value, 'containsSubstring').includes(
    requireString(substring, 'containsSubstring')
  );
}

module.exports = containsSubstring;
