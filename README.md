# string-utils-jest

Professional JavaScript string utility library with a Jest suite covering 20 reusable string manipulation functions.

## Stack

- JavaScript for the library implementation
- TypeScript declaration support for editor autocomplete and type checking
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
- Import the package from JavaScript or TypeScript through the root entry point.
- Run `npm run cli -- --help` to inspect the CLI.
- Run `npm run package:check` to preview the publishable npm tarball.

## Deployed

No deployed application. This repository publishes a reusable library package.

## Architecture Notes

This project is a focused utility library rather than an app. The core idea is simple: each string function lives in its own small module so behavior stays easy to test, review, and reuse. Shared input validation lives in one helper file to avoid repeating error handling logic across twenty functions, while `src/utils/string/index.js` and `src/index.js` provide clean public entry points for consumers. The test suite mirrors the library structure with smaller files grouped around related behaviors, and the package now includes a root declaration file so TypeScript users get clear signatures without needing a build step inside the library itself.

## Notes

- The package is implemented as CommonJS to keep Jest setup straightforward.
- CI currently runs linting, format checks, and coverage-aware tests on every push and pull request.
- Releases are prepared through GitHub Actions from `v*` tags and require an `NPM_TOKEN` secret.
- Coverage output is written to `coverage/` locally and ignored by Git.
- The published package exposes one root entry point with matching runtime and type metadata.
- The published package also exposes a `string-utils` CLI with `--help` and `--version`.

## Release Process

1. Update the version in `package.json`.
2. Run `npm run release:check`.
3. Commit the release changes.
4. Create and push a tag such as `v0.5.0`.
5. Ensure the repository has an `NPM_TOKEN` Actions secret so `.github/workflows/release.yml` can publish.

## TypeScript Usage

```ts
import { slugify, truncate } from 'string-utils-jest';

const slug = slugify('Typed consumer example');
const preview = truncate(slug, 12);
```

## CLI Usage

```bash
npm run cli -- slugify Clean URLs For Humans
npm run cli -- truncate Engineering quality matters --length 15
npm run cli -- title-case clean-code habits
npm run cli -- mask secret-token --visible 4 --mask #
```

## Test Layout

- `tests/cli/parseArgs.test.js` covers CLI argument parsing branches.
- `tests/cli/runCli.test.js` covers CLI behavior, output, and error handling.
- `tests/utils/string/analysis.test.js` covers counting and detection helpers.
- `tests/utils/string/caseConversion.test.js` covers casing and token-based conversions.
- `tests/utils/string/formatting.test.js` covers truncation, padding, masking, and whitespace changes.
- `tests/utils/string/matching.test.js` covers substring and replacement behavior.
- `tests/utils/string/publicApi.test.js` protects the root export surface.
- `tests/utils/string/shared/validation.test.js` covers the shared input guards directly.
