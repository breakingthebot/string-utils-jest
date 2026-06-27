/**
 * Validates common inputs for the string utility modules.
 * Connects to: src/config/logger.js, all string utility files.
 * Created: 2026-06-27
 */
const { logError } = require('../../../config/logger');

/**
 * Ensures a value is a string before processing.
 * @param {unknown} value - The candidate string value.
 * @param {string} functionName - The calling function name for error context.
 * @returns {string} The validated string value.
 * @throws {TypeError} When the value is not a string.
 */
function requireString(value, functionName) {
  if (typeof value !== 'string') {
    const details = {
      functionName,
      receivedType: typeof value,
    };
    logError('Expected a string input.', details);
    throw new TypeError(`${functionName} expected a string input.`);
  }

  return value;
}

/**
 * Ensures a value is a finite number before processing.
 * @param {unknown} value - The candidate numeric value.
 * @param {string} functionName - The calling function name for error context.
 * @param {string} label - The parameter label for the error message.
 * @returns {number} The validated numeric value.
 * @throws {TypeError} When the value is not a finite number.
 */
function requireFiniteNumber(value, functionName, label) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    const details = {
      functionName,
      label,
      receivedType: typeof value,
      value,
    };
    logError('Expected a finite numeric input.', details);
    throw new TypeError(
      `${functionName} expected ${label} to be a finite number.`
    );
  }

  return value;
}

module.exports = {
  requireString,
  requireFiniteNumber,
};
