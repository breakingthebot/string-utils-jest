/**
 * Verifies the public behavior of the string utility library.
 * Connects to: src/index.js, Jest.
 * Created: 2026-06-27
 */
const {
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
} = require('../../../src');

describe('string utility library', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('capitalize uppercases the first character', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('decapitalize lowercases the first character', () => {
    expect(decapitalize('Hello World')).toBe('hello World');
  });

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

  test('slugify builds URL-safe slugs', () => {
    expect(slugify(' Clean   URLs for Humans! ')).toBe('clean-urls-for-humans');
  });

  test('camelCase converts spaced text', () => {
    expect(camelCase('make this readable')).toBe('makeThisReadable');
  });

  test('kebabCase converts text to kebab format', () => {
    expect(kebabCase('Make This Readable')).toBe('make-this-readable');
  });

  test('snakeCase converts text to snake format', () => {
    expect(snakeCase('Make This Readable')).toBe('make_this_readable');
  });

  test('truncate shortens long strings with an omission marker', () => {
    expect(truncate('Engineering quality matters', 15)).toBe('Engineering ...');
  });

  test('removeWhitespace strips all whitespace', () => {
    expect(removeWhitespace(' a \t b \n c ')).toBe('abc');
  });

  test('repeatString repeats a string a fixed number of times', () => {
    expect(repeatString('na', 4)).toBe('nananana');
  });

  test('padString pads symmetrically to a target length', () => {
    expect(padString('cat', 7, '.')).toBe('..cat..');
  });

  test('maskString preserves the configured suffix', () => {
    expect(maskString('1234567890', 4)).toBe('******7890');
  });

  test('maskString can hide the entire string', () => {
    expect(maskString('secret', 0)).toBe('******');
  });

  test('extractInitials builds uppercase initials', () => {
    expect(extractInitials('ada lovelace')).toBe('AL');
  });

  test('containsSubstring checks for substring membership', () => {
    expect(containsSubstring('modular architecture', 'arch')).toBe(true);
  });

  test('replaceAllOccurrences replaces each literal match', () => {
    expect(replaceAllOccurrences('red blue red', 'red', 'green')).toBe(
      'green blue green'
    );
  });

  test('toTitleCase capitalizes normalized words', () => {
    expect(toTitleCase('clean-code habits')).toBe('Clean Code Habits');
  });

  test('countWords counts normalized word tokens', () => {
    expect(countWords('One, two   three-four')).toBe(4);
  });

  test('utilities throw on invalid string input', () => {
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => containsSubstring('value', 10)).toThrow(TypeError);
  });

  test('numeric utilities validate argument ranges', () => {
    expect(() => repeatString('value', -1)).toThrow(RangeError);
    expect(() => replaceAllOccurrences('value', '', '-')).toThrow(RangeError);
    expect(() => padString('value', 8, '')).toThrow(RangeError);
  });
});
