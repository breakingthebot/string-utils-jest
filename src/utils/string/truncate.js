/**
 * Shortens a string to a maximum length and appends an omission marker when needed.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireFiniteNumber, requireString } = require('./shared/validation');

/**
 * Truncates a string to the specified maximum length.
 * @param {string} value - The source text.
 * @param {number} maxLength - The maximum output length.
 * @param {string} [omission='...'] - The omission marker to append.
 * @returns {string} The truncated string.
 */
function truncate(value, maxLength, omission = '...') {
  const normalizedValue = requireString(value, 'truncate');
  const normalizedMaxLength = requireFiniteNumber(
    maxLength,
    'truncate',
    'maxLength'
  );
  const normalizedOmission = requireString(omission, 'truncate');

  if (normalizedMaxLength < 0) {
    throw new RangeError('truncate expected maxLength to be zero or greater.');
  }

  if (normalizedValue.length <= normalizedMaxLength) {
    return normalizedValue;
  }

  if (normalizedMaxLength <= normalizedOmission.length) {
    return normalizedOmission.slice(0, normalizedMaxLength);
  }

  return (
    normalizedValue.slice(0, normalizedMaxLength - normalizedOmission.length) +
    normalizedOmission
  );
}

module.exports = truncate;
