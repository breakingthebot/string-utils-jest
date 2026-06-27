/**
 * Provides minimal structured logging helpers for development-time diagnostics.
 * Connects to: src/utils/string/shared/validation.js.
 * Created: 2026-06-27
 */
const DEFAULT_CONTEXT = 'string-utils';

/**
 * Formats a log payload consistently across modules.
 * @param {'DEBUG' | 'INFO' | 'WARNING' | 'ERROR'} level - The log severity.
 * @param {string} message - The message to log.
 * @param {Record<string, unknown>} [details={}] - Additional log details.
 * @returns {string} The serialized log payload.
 */
function formatLog(level, message, details = {}) {
  return JSON.stringify({
    context: DEFAULT_CONTEXT,
    level,
    message,
    details,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Logs an error payload to stderr for explicit failure visibility.
 * @param {string} message - The error message.
 * @param {Record<string, unknown>} [details={}] - Additional log details.
 * @returns {void}
 */
function logError(message, details = {}) {
  console.error(formatLog('ERROR', message, details));
}

module.exports = {
  formatLog,
  logError,
};
