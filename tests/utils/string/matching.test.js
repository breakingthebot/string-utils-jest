/**
 * Verifies substring matching and replacement utilities.
 * Connects to: src/index.js, Jest.
 * Created: 2026-06-27
 */
const { containsSubstring, replaceAllOccurrences } = require('../../../src');

describe('matching string utilities', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('containsSubstring checks for substring membership', () => {
    expect(containsSubstring('modular architecture', 'arch')).toBe(true);
  });

  test('containsSubstring returns false when a match is absent', () => {
    expect(containsSubstring('modular architecture', 'zoo')).toBe(false);
  });

  test('replaceAllOccurrences replaces each literal match', () => {
    expect(replaceAllOccurrences('red blue red', 'red', 'green')).toBe(
      'green blue green'
    );
  });

  test('replaceAllOccurrences rejects an empty search value', () => {
    expect(() => replaceAllOccurrences('value', '', '-')).toThrow(RangeError);
  });

  test('matching helpers reject invalid input types', () => {
    expect(() => containsSubstring('value', 10)).toThrow(TypeError);
    expect(() => replaceAllOccurrences(null, 'a', 'b')).toThrow(TypeError);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
  });
});
