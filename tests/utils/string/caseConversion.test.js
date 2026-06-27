/**
 * Verifies case-conversion and token-normalization string utilities.
 * Connects to: src/index.js, Jest.
 * Created: 2026-06-27
 */
const {
  camelCase,
  capitalize,
  decapitalize,
  kebabCase,
  slugify,
  snakeCase,
  toTitleCase,
} = require('../../../src');

describe('case conversion string utilities', () => {
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

  test('capitalize returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  test('decapitalize lowercases the first character', () => {
    expect(decapitalize('Hello World')).toBe('hello World');
  });

  test('decapitalize returns an empty string unchanged', () => {
    expect(decapitalize('')).toBe('');
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

  test('toTitleCase capitalizes normalized words', () => {
    expect(toTitleCase('clean-code habits')).toBe('Clean Code Habits');
  });

  test('case conversion helpers reject invalid input', () => {
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => decapitalize(undefined)).toThrow(TypeError);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
  });
});
