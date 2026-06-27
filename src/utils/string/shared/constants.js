/**
 * Defines reusable constants shared across string utility modules.
 * Connects to: shared validation and case-conversion utilities.
 * Created: 2026-06-27
 */
const WORD_SEPARATOR_PATTERN = /[\s_-]+/;
const NON_ALPHANUMERIC_BOUNDARY_PATTERN = /[^a-z0-9]+/gi;
const VOWEL_PATTERN = /[aeiou]/i;
const LETTER_PATTERN = /[a-z]/i;

module.exports = {
  WORD_SEPARATOR_PATTERN,
  NON_ALPHANUMERIC_BOUNDARY_PATTERN,
  VOWEL_PATTERN,
  LETTER_PATTERN,
};
