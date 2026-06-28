/**
 * Provides shared README CLI usage section matching and replacement helpers.
 * Connects to: scripts/checkReadmeCliUsage.js, scripts/syncReadmeCliUsage.js, README.md.
 * Created: 2026-06-28
 */
const CLI_SECTION_PATTERN = /## CLI Usage\s*\r?\n\r?\n```bash[\s\S]*?\r?\n```/;

/**
 * Finds the README CLI usage section.
 * @param {string} readmeContent - Full README markdown content.
 * @returns {RegExpMatchArray | null} The matched CLI usage section.
 */
function matchCliUsageSection(readmeContent) {
  return readmeContent.match(CLI_SECTION_PATTERN);
}

/**
 * Replaces the README CLI usage section with generated content.
 * @param {string} readmeContent - Full README markdown content.
 * @param {string} replacementSection - Generated CLI usage markdown.
 * @returns {string} Updated README markdown.
 * @throws {Error} When the CLI usage section is missing.
 */
function replaceCliUsageSection(readmeContent, replacementSection) {
  if (!CLI_SECTION_PATTERN.test(readmeContent)) {
    throw new Error('README.md is missing the CLI Usage section.');
  }

  return readmeContent.replace(CLI_SECTION_PATTERN, replacementSection);
}

module.exports = {
  matchCliUsageSection,
  replaceCliUsageSection,
};
