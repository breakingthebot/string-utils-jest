/**
 * Defines the supported CLI commands and their execution behavior.
 * Connects to: src/cli/getHelpText.js, src/cli/runCli.js, src/utils/string/index.js.
 * Created: 2026-06-27
 */
const packageMetadata = require('../../package.json');
const {
  maskString,
  slugify,
  toTitleCase,
  truncate,
} = require('../utils/string');

/**
 * Ensures a CLI command received non-empty input text.
 * @param {string} input - The normalized CLI input string.
 * @param {string} commandName - The command being executed.
 * @returns {string} The validated input string.
 * @throws {Error} When the input string is empty.
 */
function requireInput(input, commandName) {
  if (input.length === 0) {
    throw new Error(`${commandName} requires text input.`);
  }

  return input;
}

/**
 * Parses a required integer flag value.
 * @param {string | undefined} rawValue - The raw flag value.
 * @param {string} flagName - The flag name for error messaging.
 * @returns {number} The parsed integer.
 * @throws {Error} When the flag is missing or invalid.
 */
function requireIntegerFlag(rawValue, flagName) {
  const parsedValue = Number.parseInt(rawValue, 10);

  if (rawValue === undefined || Number.isNaN(parsedValue)) {
    throw new Error(`Expected ${flagName} to be provided as an integer value.`);
  }

  return parsedValue;
}

/**
 * Executes the slugify CLI command.
 * @param {{ input: string }} commandContext - Parsed CLI state.
 * @returns {string} The command output.
 */
function runSlugify(commandContext) {
  return slugify(requireInput(commandContext.input, 'slugify'));
}

/**
 * Executes the title-case CLI command.
 * @param {{ input: string }} commandContext - Parsed CLI state.
 * @returns {string} The command output.
 */
function runTitleCase(commandContext) {
  return toTitleCase(requireInput(commandContext.input, 'title-case'));
}

/**
 * Executes the truncate CLI command.
 * @param {{ input: string, flags: Record<string, string | undefined> }} commandContext - Parsed CLI state.
 * @returns {string} The command output.
 */
function runTruncate(commandContext) {
  const input = requireInput(commandContext.input, 'truncate');
  const maxLength = requireIntegerFlag(commandContext.flags.length, '--length');
  const omission = commandContext.flags.omission ?? '...';

  return truncate(input, maxLength, omission);
}

/**
 * Executes the mask CLI command.
 * @param {{ input: string, flags: Record<string, string | undefined> }} commandContext - Parsed CLI state.
 * @returns {string} The command output.
 */
function runMask(commandContext) {
  const input = requireInput(commandContext.input, 'mask');
  const visibleCount = requireIntegerFlag(
    commandContext.flags.visible,
    '--visible'
  );
  const maskCharacter = commandContext.flags.mask ?? '*';

  return maskString(input, visibleCount, maskCharacter);
}

const commandDefinitions = {
  mask: {
    description: 'Mask a string while leaving a visible suffix.',
    example: 'string-utils mask secret-token --visible 4 --mask #',
    execute: runMask,
  },
  slugify: {
    description: 'Convert free-form text into a URL-friendly slug.',
    example: 'string-utils slugify Clean URLs For Humans',
    execute: runSlugify,
  },
  'title-case': {
    description: 'Convert text into title case.',
    example: 'string-utils title-case clean-code habits',
    execute: runTitleCase,
  },
  truncate: {
    description: 'Shorten text using --length and optional --omission.',
    example: 'string-utils truncate Engineering quality matters --length 15',
    execute: runTruncate,
  },
};

module.exports = {
  commandDefinitions,
  getVersion() {
    return packageMetadata.version;
  },
  requireInput,
  requireIntegerFlag,
};
