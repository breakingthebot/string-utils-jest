/**
 * Rewrites the README CLI usage section from the CLI command definitions.
 * Connects to: README.md, src/services/docs/getCliUsageSection.js, src/services/docs/readmeCliUsageSection.js.
 * Created: 2026-06-28
 */
const fs = require('fs');
const path = require('path');

const getCliUsageSection = require('../src/services/docs/getCliUsageSection');
const {
  replaceCliUsageSection,
} = require('../src/services/docs/readmeCliUsageSection');

const README_PATH = path.resolve(__dirname, '..', 'README.md');

/**
 * Synchronizes the README CLI usage section with CLI command definitions.
 * @returns {number} Process exit code.
 */
function syncReadmeCliUsage() {
  const readmeContent = fs.readFileSync(README_PATH, 'utf8');
  const updatedContent = replaceCliUsageSection(
    readmeContent,
    getCliUsageSection()
  );

  fs.writeFileSync(README_PATH, updatedContent);
  process.stdout.write('README.md CLI Usage section synchronized.\n');
  return 0;
}

try {
  process.exitCode = syncReadmeCliUsage();
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
