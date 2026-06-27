/**
 * Verifies the shared validation helpers used across string utilities.
 * Connects to: src/utils/string/shared/validation.js, Jest.
 * Created: 2026-06-27
 */
const {
  requireFiniteNumber,
  requireString,
} = require('../../../../src/utils/string/shared/validation');

describe('shared validation helpers', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('requireString returns valid string input', () => {
    expect(requireString('value', 'testHelper')).toBe('value');
  });

  test('requireString throws on non-string input', () => {
    expect(() => requireString(null, 'testHelper')).toThrow(TypeError);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  test('requireFiniteNumber returns valid numeric input', () => {
    expect(requireFiniteNumber(5, 'testHelper', 'count')).toBe(5);
  });

  test('requireFiniteNumber throws on invalid input', () => {
    expect(() =>
      requireFiniteNumber(Number.NaN, 'testHelper', 'count')
    ).toThrow(TypeError);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });
});
