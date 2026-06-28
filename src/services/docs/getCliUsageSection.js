/**
 * Generates the README CLI usage section from the registered CLI command definitions.
 * Connects to: src/cli/commandDefinitions.js, scripts/checkReadmeCliUsage.js, README.md.
 * Created: 2026-06-28
 */
const { commandDefinitions } = require('../../cli/commandDefinitions');

/**
 * Builds the CLI usage markdown block for README verification.
 * @returns {string} Markdown section content for CLI usage examples.
 */
function getCliUsageSection() {
  const exampleLines = Object.values(commandDefinitions).map((definition) => {
    return `npm run cli -- ${definition.example.replace(/^string-utils\s+/, '')}`;
  });

  return ['## CLI Usage', '', '```bash', ...exampleLines, '```'].join('\n');
}

module.exports = getCliUsageSection;
