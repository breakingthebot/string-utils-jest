/**
 * Verifies formatting-oriented string utilities.
 * Connects to: src/index.js, Jest.
 * Created: 2026-06-27
 */
const {
  maskString,
  padString,
  removeWhitespace,
  repeatString,
  truncate,
} = require('../../../src');

describe('formatting string utilities', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('truncate shortens long strings with an omission marker', () => {
    expect(truncate('Engineering quality matters', 15)).toBe('Engineering ...');
  });

  test('truncate returns the omission prefix when maxLength is very small', () => {
    expect(truncate('Engineering quality matters', 2)).toBe('..');
  });

  test('truncate returns the original string when no truncation is needed', () => {
    expect(truncate('brief', 10)).toBe('brief');
  });

  test('truncate rejects negative lengths', () => {
    expect(() => truncate('brief', -1)).toThrow(RangeError);
  });

  test('removeWhitespace strips all whitespace', () => {
    expect(removeWhitespace(' a \t b \n c ')).toBe('abc');
  });

  test('repeatString repeats a string a fixed number of times', () => {
    expect(repeatString('na', 4)).toBe('nananana');
  });

  test('repeatString rejects non-integer repetition counts', () => {
    expect(() => repeatString('na', 2.5)).toThrow(RangeError);
  });

  test('padString pads symmetrically to a target length', () => {
    expect(padString('cat', 7, '.')).toBe('..cat..');
  });

  test('padString returns the original string when targetLength is shorter', () => {
    expect(padString('catalog', 3, '.')).toBe('catalog');
  });

  test('padString rejects invalid padding configuration', () => {
    expect(() => padString('value', -1, '.')).toThrow(RangeError);
    expect(() => padString('value', 8, '')).toThrow(RangeError);
  });

  test('maskString preserves the configured suffix', () => {
    expect(maskString('1234567890', 4)).toBe('******7890');
  });

  test('maskString can hide the entire string', () => {
    expect(maskString('secret', 0)).toBe('******');
  });

  test('maskString returns the original string when the visible suffix covers it', () => {
    expect(maskString('secret', 10)).toBe('secret');
  });

  test('maskString rejects invalid numeric and mask inputs', () => {
    expect(() => maskString('secret', -1)).toThrow(RangeError);
    expect(() => maskString('secret', 2, '##')).toThrow(RangeError);
  });

  test('formatting helpers log explicit type errors for invalid inputs', () => {
    expect(() => truncate(null, 2)).toThrow(TypeError);
    expect(() => repeatString('value', Number.NaN)).toThrow(TypeError);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
  });
});
