/**
 * Configures ESLint rules for the string utility library.
 * Connects to: package.json, src/, tests/.
 * Created: 2026-06-27
 */
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
