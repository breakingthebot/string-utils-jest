/**
 * Masks part of a string while keeping a configurable suffix visible.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireFiniteNumber, requireString } = require('./shared/validation');

/**
 * Masks a string except for a visible suffix.
 * @param {string} value - The source text.
 * @param {number} visibleCount - The number of trailing characters to keep visible.
 * @param {string} [maskCharacter='*'] - The replacement character.
 * @returns {string} The masked string.
 */
function maskString(value, visibleCount, maskCharacter = '*') {
  const normalizedValue = requireString(value, 'maskString');
  const normalizedVisibleCount = requireFiniteNumber(
    visibleCount,
    'maskString',
    'visibleCount'
  );
  const normalizedMaskCharacter = requireString(maskCharacter, 'maskString');

  if (!Number.isInteger(normalizedVisibleCount) || normalizedVisibleCount < 0) {
    throw new RangeError(
      'maskString expected visibleCount to be a non-negative integer.'
    );
  }

  if (normalizedMaskCharacter.length !== 1) {
    throw new RangeError(
      'maskString expected maskCharacter to be a single character.'
    );
  }

  if (normalizedVisibleCount >= normalizedValue.length) {
    return normalizedValue;
  }

  const hiddenLength = normalizedValue.length - normalizedVisibleCount;
  const visibleSuffix =
    normalizedVisibleCount === 0
      ? ''
      : normalizedValue.slice(-normalizedVisibleCount);

  return normalizedMaskCharacter.repeat(hiddenLength) + visibleSuffix;
}

module.exports = maskString;
