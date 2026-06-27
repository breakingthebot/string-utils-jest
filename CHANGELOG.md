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
