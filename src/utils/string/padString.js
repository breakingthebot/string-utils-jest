/**
 * Pads a string on both sides until a target length is reached.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireFiniteNumber, requireString } = require('./shared/validation');

/**
 * Pads a string symmetrically until it reaches a target length.
 * @param {string} value - The source text.
 * @param {number} targetLength - The desired output length.
 * @param {string} [padding=' '] - The padding string.
 * @returns {string} The padded string.
 */
function padString(value, targetLength, padding = ' ') {
  const normalizedValue = requireString(value, 'padString');
  const normalizedTargetLength = requireFiniteNumber(
    targetLength,
    'padString',
    'targetLength'
  );
  const normalizedPadding = requireString(padding, 'padString');

  if (!Number.isInteger(normalizedTargetLength) || normalizedTargetLength < 0) {
    throw new RangeError(
      'padString expected targetLength to be a non-negative integer.'
    );
  }

  if (normalizedPadding.length === 0) {
    throw new RangeError(
      'padString expected padding to contain at least one character.'
    );
  }

  return normalizedValue
    .padStart(
      Math.floor((normalizedTargetLength + normalizedValue.length) / 2),
      normalizedPadding
    )
    .padEnd(normalizedTargetLength, normalizedPadding);
}

module.exports = padString;
