/**
 * Verifies CLI argument parsing behavior across flags and positional text.
 * Connects to: src/cli/parseArgs.js, Jest.
 * Created: 2026-06-27
 */
const parseArgs = require('../../src/cli/parseArgs');

describe('parseArgs', () => {
  test('returns help mode when no arguments are provided', () => {
    expect(parseArgs([])).toEqual({ mode: 'help' });
  });

  test('returns help mode for help flags', () => {
    expect(parseArgs(['--help'])).toEqual({ mode: 'help' });
    expect(parseArgs(['-h'])).toEqual({ mode: 'help' });
  });

  test('returns version mode for version flags', () => {
    expect(parseArgs(['--version'])).toEqual({ mode: 'version' });
    expect(parseArgs(['-v'])).toEqual({ mode: 'version' });
  });

  test('parses command text and string flags', () => {
    expect(
      parseArgs([
        'truncate',
        'Engineering',
        'quality',
        'matters',
        '--length',
        '15',
        '--omission',
        '..',
      ])
    ).toEqual({
      commandName: 'truncate',
      flags: {
        length: '15',
        omission: '..',
      },
      input: 'Engineering quality matters',
      mode: 'command',
    });
  });

  test('stores undefined for flags without values', () => {
    expect(parseArgs(['mask', 'secret', '--visible'])).toEqual({
      commandName: 'mask',
      flags: {
        visible: undefined,
      },
      input: 'secret',
      mode: 'command',
    });
  });
});
