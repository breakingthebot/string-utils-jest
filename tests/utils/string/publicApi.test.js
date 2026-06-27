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
    expect(packageMetadata.exports['.']).toEqual({
      require: './src/index.js',
      types: './index.d.ts',
    });
  });
});
