/**
 * Repeats a string a fixed number of times.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireFiniteNumber, requireString } = require('./shared/validation');

/**
 * Repeats a string count times.
 * @param {string} value - The source text.
 * @param {number} count - The number of repetitions.
 * @returns {string} The repeated string.
 */
function repeatString(value, count) {
  const normalizedValue = requireString(value, 'repeatString');
  const normalizedCount = requireFiniteNumber(count, 'repeatString', 'count');

  if (!Number.isInteger(normalizedCount) || normalizedCount < 0) {
    throw new RangeError(
      'repeatString expected count to be a non-negative integer.'
    );
  }

  return normalizedValue.repeat(normalizedCount);
}

module.exports = repeatString;
