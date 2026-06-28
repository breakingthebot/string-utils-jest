/**
 * Verifies the root package export surface remains stable for consumers.
 * Connects to: src/index.js, package.json, Jest.
 * Created: 2026-06-27
 */
const exportedUtilities = require('../../../src');
const packageMetadata = require('../../../package.json');

describe('public package api', () => {
  test('exports the expected utility names from the root entry point', () => {
    expect(Object.keys(exportedUtilities).sort()).toEqual(
      [
        'camelCase',
        'capitalize',
        'containsSubstring',
        'countConsonants',
        'countVowels',
        'countWords',
        'decapitalize',
        'extractInitials',
        'isPalindrome',
        'kebabCase',
        'maskString',
        'padString',
        'removeWhitespace',
        'repeatString',
        'replaceAllOccurrences',
        'reverseString',
        'slugify',
        'snakeCase',
        'toTitleCase',
        'truncate',
      ].sort()
    );
  });

  test('package metadata points to the runtime and type entry points', () => {
    expect(packageMetadata.main).toBe('src/index.js');
    expect(packageMetadata.types).toBe('index.d.ts');
    expect(packageMetadata.bin).toEqual({
      'string-utils': './bin/string-utils.js',
    });
    expect(packageMetadata.exports['.']).toEqual({
      require: './src/index.js',
      types: './index.d.ts',
    });
  });

  test('package metadata exposes release-oriented repository details', () => {
    expect(packageMetadata.repository).toEqual({
      type: 'git',
      url: 'git+https://github.com/breakingthebot/string-utils-jest.git',
    });
    expect(packageMetadata.bugs).toEqual({
      url: 'https://github.com/breakingthebot/string-utils-jest/issues',
    });
    expect(packageMetadata.homepage).toBe(
      'https://github.com/breakingthebot/string-utils-jest#readme'
    );
    expect(packageMetadata.publishConfig).toEqual({
      access: 'public',
    });
  });

  test('package metadata exposes the expected verification scripts', () => {
    expect(packageMetadata.scripts['cli:smoke']).toBe(
      'node ./bin/string-utils.js --version && node ./bin/string-utils.js slugify Clean URLs For Humans'
    );
    expect(packageMetadata.scripts['package:check']).toBe(
      'npm pack --dry-run --cache ./.npm-cache'
    );
    expect(packageMetadata.scripts['release:check']).toBe(
      'npm run lint && npm run format:check && npm run test:coverage && npm run package:check'
    );
  });
});
