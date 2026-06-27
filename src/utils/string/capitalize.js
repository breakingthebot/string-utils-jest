/**
 * Capitalizes the first character of a string and preserves the remainder.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Capitalizes the first character of the provided string.
 * @param {string} value - The source text.
 * @returns {string} The capitalized string.
 */
function capitalize(value) {
  const normalizedValue = requireString(value, 'capitalize');

  if (normalizedValue.length === 0) {
    return normalizedValue;
  }

  return normalizedValue[0].toUpperCase() + normalizedValue.slice(1);
}

module.exports = capitalize;
