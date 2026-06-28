# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] - 2026-06-27

### Added

- Initial release of a tested JavaScript string utility library.
- Twenty modular string utility functions under `src/utils/string/`.
- Shared validation helpers and public package entry points.
- Jest test suite covering expected behavior and error handling.
- ESLint, Prettier, and GitHub Actions CI configuration.
- MIT license and project documentation.

## [0.2.0] - 2026-06-27

### Added

- Dedicated Jest configuration with coverage collection and minimum thresholds.
- Mirrored test files grouped by behavior area under `tests/utils/string/`.
- Validation helper tests to confirm explicit type-checking behavior.

### Changed

- CI now runs coverage-aware tests instead of the plain Jest command.
- README now documents the coverage workflow and the more granular test layout.

## [0.3.0] - 2026-06-27

### Added

- Root `index.d.ts` declaration file for all 20 public utilities.
- Public API test to lock the package export surface.

### Changed

- Package metadata now includes `types`, `exports`, and publishable type files.
- README now documents TypeScript consumption from the root package entry point.

## [0.4.0] - 2026-06-27

### Added

- Installable `string-utils` CLI entry point under `bin/`.
- Modular CLI parser, help generator, and command definitions under `src/cli/`.
- CLI test coverage for help, version, commands, and invalid input branches.

### Changed

- Package metadata now publishes the CLI and exposes a local `npm run cli` script.
- README now documents terminal usage examples for the CLI.

## [0.5.0] - 2026-06-27

### Added

- GitHub Actions release workflow for tag-driven npm publishing.
- `package:check` and `release:check` scripts for local release verification.

### Changed

- Package metadata now includes repository, homepage, bugs, and publish configuration fields.
- README now documents the publish verification and release process.

## [0.6.0] - 2026-06-27

### Added

- `cli:smoke` script for fast end-to-end CLI verification.
- Cross-platform CI matrix coverage for Ubuntu, Windows, and macOS.

### Changed

- CI now runs standard tests and CLI smoke checks across three operating systems.
- Ubuntu CI additionally runs the full release verification flow.

## [0.7.0] - 2026-06-28

### Added

- Generated README CLI usage section helper under `src/services/docs/`.
- `docs:check` script to prevent README CLI examples from drifting away from command definitions.
- Test coverage for generated CLI documentation content.

### Changed

- CI now verifies README CLI usage examples in addition to runtime checks.
- Release verification now includes the README docs consistency check.
