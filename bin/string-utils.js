#!/usr/bin/env node
/**
 * Launches the installable CLI entry point for the string utility library.
 * Connects to: src/cli/runCli.js, package.json.
 * Created: 2026-06-27
 */
const runCli = require('../src/cli/runCli');

process.exitCode = runCli();
