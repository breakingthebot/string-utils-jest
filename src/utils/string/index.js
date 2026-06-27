/**
 * Aggregates the public string utility functions into a single module.
 * Connects to: src/index.js, individual utility modules.
 * Created: 2026-06-27
 */
const camelCase = require('./camelCase');
const capitalize = require('./capitalize');
const containsSubstring = require('./containsSubstring');
const countConsonants = require('./countConsonants');
const countVowels = require('./countVowels');
const countWords = require('./countWords');
const decapitalize = require('./decapitalize');
const extractInitials = require('./extractInitials');
const isPalindrome = require('./isPalindrome');
const kebabCase = require('./kebabCase');
const maskString = require('./maskString');
const padString = require('./padString');
const removeWhitespace = require('./removeWhitespace');
const repeatString = require('./repeatString');
const replaceAllOccurrences = require('./replaceAllOccurrences');
const reverseString = require('./reverseString');
const slugify = require('./slugify');
const snakeCase = require('./snakeCase');
const toTitleCase = require('./toTitleCase');
const truncate = require('./truncate');

module.exports = {
  camelCase,
  capitalize,
  containsSubstring,
  countConsonants,
  countVowels,
  countWords,
  decapitalize,
  extractInitials,
  isPalindrome,
  kebabCase,
  maskString,
  padString,
  removeWhitespace,
  repeatString,
  replaceAllOccurrences,
  reverseString,
  slugify,
  snakeCase,
  toTitleCase,
  truncate,
};
