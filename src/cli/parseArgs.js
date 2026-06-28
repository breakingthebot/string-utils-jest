/**
 * Parses raw CLI arguments into a normalized command context.
 * Connects to: src/cli/runCli.js.
 * Created: 2026-06-27
 */
const HELP_FLAGS = new Set(['--help', '-h']);
const VERSION_FLAGS = new Set(['--version', '-v']);

/**
 * Parses raw CLI arguments into a structured command state.
 * @param {string[]} argv - Command arguments without the Node executable or script path.
 * @returns {{ mode: 'help' } | { mode: 'version' } | { mode: 'command', commandName: string, input: string, flags: Record<string, string | undefined> }}
 */
function parseArgs(argv) {
  if (argv.length === 0 || HELP_FLAGS.has(argv[0])) {
    return { mode: 'help' };
  }

  if (VERSION_FLAGS.has(argv[0])) {
    return { mode: 'version' };
  }

  const [commandName, ...remainingArgs] = argv;
  const flags = {};
  const positionals = [];

  for (let index = 0; index < remainingArgs.length; index += 1) {
    const currentToken = remainingArgs[index];

    if (currentToken.startsWith('--')) {
      const nextToken = remainingArgs[index + 1];
      const hasValue = nextToken !== undefined && !nextToken.startsWith('--');

      flags[currentToken.slice(2)] = hasValue ? nextToken : undefined;

      if (hasValue) {
        index += 1;
      }

      continue;
    }

    positionals.push(currentToken);
  }

  return {
    mode: 'command',
    commandName,
    flags,
    input: positionals.join(' '),
  };
}

module.exports = parseArgs;
