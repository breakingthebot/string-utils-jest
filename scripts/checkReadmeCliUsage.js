/**
 * Verifies that the README CLI usage section matches the CLI command definitions.
 * Connects to: README.md, src/services/docs/getCliUsageSection.js, package.json.
 * Created: 2026-06-28
 */
const fs = require('fs');
const path = require('path');

const getCliUsageSection = require('../src/services/docs/getCliUsageSection');

const README_PATH = path.resolve(__dirname, '..', 'README.md');
const CLI_SECTION_PATTERN = /## CLI Usage\s*\r?\n\r?\n```bash[\s\S]*?\r?\n```/;

/**
 * Checks the README CLI usage block for drift.
 * @returns {number} Process exit code.
 */
function checkReadmeCliUsage() {
  const readmeContent = fs.readFileSync(README_PATH, 'utf8');
  const expectedSection = getCliUsageSection();
  const actualMatch = readmeContent.match(CLI_SECTION_PATTERN);

  if (!actualMatch) {
    process.stderr.write('README.md is missing the CLI Usage section.\n');
    return 1;
  }

  if (actualMatch[0] !== expectedSection) {
    process.stderr.write(
      'README.md CLI Usage section is out of sync with the CLI command definitions.\n'
    );
    return 1;
  }

  return 0;
}

process.exitCode = checkReadmeCliUsage();
