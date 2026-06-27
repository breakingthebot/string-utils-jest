/**
 * Checks whether a string reads the same forward and backward after normalization.
 * Connects to: shared validation helpers.
 * Created: 2026-06-27
 */
const { requireString } = require('./shared/validation');

/**
 * Evaluates whether a string is a palindrome.
 * @param {string} value - The source text.
 * @returns {boolean} True when the normalized text is a palindrome.
 */
function isPalindrome(value) {
  const normalizedValue = requireString(value, 'isPalindrome')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  return normalizedValue === normalizedValue.split('').reverse().join('');
}

module.exports = isPalindrome;
