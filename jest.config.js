/**
 * Configures Jest execution and coverage thresholds for the string utility library.
 * Connects to: package.json, tests/, src/.
 * Created: 2026-06-27
 */
module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  rootDir: '.',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
