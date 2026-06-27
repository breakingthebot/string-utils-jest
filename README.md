# string-utils-jest

Professional JavaScript string utility library with a Jest suite covering 20 reusable string manipulation functions.

## Stack

- JavaScript for the library implementation
- Jest for unit testing
- ESLint and Prettier for code quality and formatting
- GitHub Actions for continuous integration

## Setup

1. Install Node.js 22 or newer.
2. Clone the repository.
3. Run `npm install`.

## Environment Variables

This project does not require environment variables. See `.env.example`.

## Running Locally

- Run `npm test` to execute the Jest suite.
- Run `npm run test:coverage` to generate a local coverage report.
- Run `npm run lint` to check code quality.
- Run `npm run format:check` to verify formatting.

## Deployed

No deployed application. This repository publishes a reusable library package.

## Architecture Notes

This project is a focused utility library rather than an app. The core idea is simple: each string function lives in its own small module so behavior stays easy to test, review, and reuse. Shared input validation lives in one helper file to avoid repeating error handling logic across twenty functions, while `src/utils/string/index.js` and `src/index.js` provide clean public entry points for consumers. The test suite now mirrors the library structure more closely, with smaller test files grouped around related behaviors and a coverage gate that stops regressions from slipping in quietly.

## Notes

- The package is implemented as CommonJS to keep Jest setup straightforward.
- CI currently runs linting, format checks, and coverage-aware tests on every push and pull request.
- Coverage output is written to `coverage/` locally and ignored by Git.

## Test Layout

- `tests/utils/string/analysis.test.js` covers counting and detection helpers.
- `tests/utils/string/caseConversion.test.js` covers casing and token-based conversions.
- `tests/utils/string/formatting.test.js` covers truncation, padding, masking, and whitespace changes.
- `tests/utils/string/matching.test.js` covers substring and replacement behavior.
- `tests/utils/string/shared/validation.test.js` covers the shared input guards directly.
