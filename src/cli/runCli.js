/**
 * Runs the string utility command-line interface.
 * Connects to: src/cli/parseArgs.js, src/cli/getHelpText.js, src/cli/commandDefinitions.js.
 * Created: 2026-06-27
 */
const { commandDefinitions, getVersion } = require('./commandDefinitions');
const getHelpText = require('./getHelpText');
const parseArgs = require('./parseArgs');

/**
 * Executes the CLI against the provided environment handles.
 * @param {{ argv?: string[], stdout?: { write: (text: string) => void }, stderr?: { write: (text: string) => void } }} [options={}] - CLI runtime overrides.
 * @returns {number} Process exit code.
 */
function runCli(options = {}) {
  const {
    argv = process.argv.slice(2),
    stdout = process.stdout,
    stderr = process.stderr,
  } = options;
  const parsedArgs = parseArgs(argv);

  if (parsedArgs.mode === 'help') {
    stdout.write(`${getHelpText()}\n`);
    return 0;
  }

  if (parsedArgs.mode === 'version') {
    stdout.write(`${getVersion()}\n`);
    return 0;
  }

  const selectedCommand = commandDefinitions[parsedArgs.commandName];

  if (!selectedCommand) {
    stderr.write(
      `Unknown command "${parsedArgs.commandName}". Run string-utils --help for usage.\n`
    );
    return 1;
  }

  try {
    stdout.write(`${selectedCommand.execute(parsedArgs)}\n`);
    return 0;
  } catch (error) {
    stderr.write(`${error.message}\n`);
    return 1;
  }
}

module.exports = runCli;
