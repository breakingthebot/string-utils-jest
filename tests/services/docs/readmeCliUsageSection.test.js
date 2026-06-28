/**
 * Verifies README CLI usage matching and replacement helpers.
 * Connects to: src/services/docs/readmeCliUsageSection.js.
 * Created: 2026-06-28
 */
const {
  matchCliUsageSection,
  replaceCliUsageSection,
} = require('../../../src/services/docs/readmeCliUsageSection');

describe('readmeCliUsageSection', () => {
  test('matches the CLI usage section when present', () => {
    const readmeContent = [
      '# Project',
      '',
      '## CLI Usage',
      '',
      '```bash',
      'npm run cli -- slugify Clean URLs For Humans',
      '```',
      '',
      '## Test Layout',
    ].join('\n');

    expect(matchCliUsageSection(readmeContent)?.[0]).toBe(
      [
        '## CLI Usage',
        '',
        '```bash',
        'npm run cli -- slugify Clean URLs For Humans',
        '```',
      ].join('\n')
    );
  });

  test('replaces the CLI usage section content', () => {
    const readmeContent = [
      '# Project',
      '',
      '## CLI Usage',
      '',
      '```bash',
      'npm run cli -- old example',
      '```',
      '',
      '## Test Layout',
    ].join('\n');

    const updatedContent = replaceCliUsageSection(
      readmeContent,
      ['## CLI Usage', '', '```bash', 'npm run cli -- new example', '```'].join(
        '\n'
      )
    );

    expect(updatedContent).toContain('npm run cli -- new example');
    expect(updatedContent).not.toContain('npm run cli -- old example');
  });

  test('throws when the CLI usage section is missing', () => {
    expect(() => replaceCliUsageSection('# Project', '## CLI Usage')).toThrow(
      'README.md is missing the CLI Usage section.'
    );
  });
});
