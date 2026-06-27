/**
 * Verifies analysis-oriented string utilities.
 * Connects to: src/index.js, Jest.
 * Created: 2026-06-27
 */
const {
  countConsonants,
  countVowels,
  countWords,
  extractInitials,
  isPalindrome,
  reverseString,
} = require('../../../src');

describe('analysis string utilities', () => {
  test('reverseString reverses character order', () => {
    expect(reverseString('stressed')).toBe('desserts');
  });

  test('isPalindrome ignores case and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('countVowels returns the vowel total', () => {
    expect(countVowels('Documentation')).toBe(6);
  });

  test('countConsonants returns the consonant total', () => {
    expect(countConsonants('Documentation')).toBe(7);
  });

  test('extractInitials builds uppercase initials', () => {
    expect(extractInitials('ada lovelace')).toBe('AL');
  });

  test('countWords counts normalized word tokens', () => {
    expect(countWords('One, two   three-four')).toBe(4);
  });
});
