/**
 * Verifies that generated README CLI usage content stays in sync with command definitions.
 * Connects to: src/services/docs/getCliUsageSection.js, src/cli/commandDefinitions.js.
 * Created: 2026-06-28
 */
const { commandDefinitions } = require('../../../src/cli/commandDefinitions');
const getCliUsageSection = require('../../../src/services/docs/getCliUsageSection');

describe('getCliUsageSection', () => {
  test('builds a CLI usage section from the command definitions', () => {
    const cliUsageSection = getCliUsageSection();

    expect(cliUsageSection.startsWith('## CLI Usage')).toBe(true);
    expect(cliUsageSection).toContain('```bash');

    Object.values(commandDefinitions).forEach((definition) => {
      const expectedExample = `npm run cli -- ${definition.example.replace(
        /^string-utils\s+/,
        ''
      )}`;
      expect(cliUsageSection).toContain(expectedExample);
    });
  });
});
