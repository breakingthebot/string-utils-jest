/**
 * Lowercases the first character of a string and preserves the remainder.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Lowercases the first character of the provided string.
 * @param {string} value - The source text.
 * @returns {string} The decapitalized string.
 */
function decapitalize(value) {
  const normalizedValue = requireString(value, 'decapitalize');

  if (normalizedValue.length === 0) {
    return normalizedValue;
  }

  return normalizedValue[0].toLowerCase() + normalizedValue.slice(1);
}

module.exports = decapitalize;
