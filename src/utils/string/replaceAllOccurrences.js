/**
 * Replaces all literal occurrences of a target substring.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Replaces every occurrence of a target substring.
 * @param {string} value - The source text.
 * @param {string} searchValue - The substring to replace.
 * @param {string} replacement - The replacement text.
 * @returns {string} The updated string.
 */
function replaceAllOccurrences(value, searchValue, replacement) {
  const normalizedValue = requireString(value, 'replaceAllOccurrences');
  const normalizedSearchValue = requireString(
    searchValue,
    'replaceAllOccurrences'
  );
  const normalizedReplacement = requireString(
    replacement,
    'replaceAllOccurrences'
  );

  if (normalizedSearchValue.length === 0) {
    throw new RangeError(
      'replaceAllOccurrences expected searchValue to contain at least one character.'
    );
  }

  return normalizedValue
    .split(normalizedSearchValue)
    .join(normalizedReplacement);
}

module.exports = replaceAllOccurrences;
