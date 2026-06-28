/**
 * Builds the CLI help text from the registered command definitions.
 * Connects to: src/cli/commandDefinitions.js, src/cli/runCli.js.
 * Created: 2026-06-27
 */
const { commandDefinitions } = require('./commandDefinitions');

/**
 * Returns the formatted CLI usage text.
 * @returns {string} The multi-line help output.
 */
function getHelpText() {
  const commandLines = Object.entries(commandDefinitions)
    .map(([commandName, definition]) => {
      return `  ${commandName.padEnd(10)} ${definition.description}`;
    })
    .join('\n');

  return [
    'string-utils',
    '',
    'Usage:',
    '  string-utils <command> <text> [options]',
    '  string-utils --help',
    '  string-utils --version',
    '',
    'Commands:',
    commandLines,
    '',
    'Options:',
    '  --length <number>    Maximum output length for truncate.',
    '  --omission <text>    Omission marker for truncate.',
    '  --visible <number>   Visible suffix length for mask.',
    '  --mask <character>   Single-character mask override for mask.',
  ].join('\n');
}

module.exports = getHelpText;
