/**
 * Verifies CLI execution behavior for success and failure paths.
 * Connects to: src/cli/runCli.js, package.json, Jest.
 * Created: 2026-06-27
 */
const packageMetadata = require('../../package.json');
const runCli = require('../../src/cli/runCli');

/**
 * Creates a mock writable stream for CLI tests.
 * @returns {{ writes: string[], stream: { write: (text: string) => void } }} Captured writes and a stream stub.
 */
function createWritableCapture() {
  const writes = [];

  return {
    writes,
    stream: {
      write(text) {
        writes.push(text);
      },
    },
  };
}

describe('runCli', () => {
  test('prints help output', () => {
    const stdout = createWritableCapture();
    const stderr = createWritableCapture();

    const exitCode = runCli({
      argv: ['--help'],
      stderr: stderr.stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toContain('Usage:');
    expect(stderr.writes).toEqual([]);
  });

  test('prints the package version', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['--version'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe(`${packageMetadata.version}\n`);
  });

  test('runs the slugify command', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['slugify', 'Clean', 'URLs', 'For', 'Humans'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe('clean-urls-for-humans\n');
  });

  test('runs the title-case command', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['title-case', 'clean-code', 'habits'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe('Clean Code Habits\n');
  });

  test('runs the truncate command with flags', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['truncate', 'Engineering', 'quality', 'matters', '--length', '15'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe('Engineering ...\n');
  });

  test('runs the mask command with explicit mask configuration', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['mask', 'secret-token', '--visible', '4', '--mask', '#'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe('########oken\n');
  });

  test('runs the mask command with the default mask character', () => {
    const stdout = createWritableCapture();

    const exitCode = runCli({
      argv: ['mask', 'secret-token', '--visible', '4'],
      stderr: createWritableCapture().stream,
      stdout: stdout.stream,
    });

    expect(exitCode).toBe(0);
    expect(stdout.writes.join('')).toBe('********oken\n');
  });

  test('rejects unknown commands', () => {
    const stderr = createWritableCapture();

    const exitCode = runCli({
      argv: ['unknown'],
      stderr: stderr.stream,
      stdout: createWritableCapture().stream,
    });

    expect(exitCode).toBe(1);
    expect(stderr.writes.join('')).toContain('Unknown command');
  });

  test('rejects commands without required text input', () => {
    const stderr = createWritableCapture();

    const exitCode = runCli({
      argv: ['slugify'],
      stderr: stderr.stream,
      stdout: createWritableCapture().stream,
    });

    expect(exitCode).toBe(1);
    expect(stderr.writes.join('')).toContain('slugify requires text input.');
  });

  test('rejects missing numeric flag values', () => {
    const stderr = createWritableCapture();

    const exitCode = runCli({
      argv: ['truncate', 'brief', '--length'],
      stderr: stderr.stream,
      stdout: createWritableCapture().stream,
    });

    expect(exitCode).toBe(1);
    expect(stderr.writes.join('')).toContain(
      'Expected --length to be provided as an integer value.'
    );
  });
});
