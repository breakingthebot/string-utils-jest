/**
 * Declares the public TypeScript types for the string utility library.
 * Connects to: package.json, src/index.js.
 * Created: 2026-06-27
 */

/**
 * Capitalizes the first character of a string.
 * @param value Source text.
 * @returns Capitalized text.
 */
export function capitalize(value: string): string;

/**
 * Lowercases the first character of a string.
 * @param value Source text.
 * @returns Decapitalized text.
 */
export function decapitalize(value: string): string;

/**
 * Reverses the characters in a string.
 * @param value Source text.
 * @returns Reversed text.
 */
export function reverseString(value: string): string;

/**
 * Checks whether a normalized string is a palindrome.
 * @param value Source text.
 * @returns True when the string is a palindrome.
 */
export function isPalindrome(value: string): boolean;

/**
 * Counts vowels in a string.
 * @param value Source text.
 * @returns Number of vowels.
 */
export function countVowels(value: string): number;

/**
 * Counts consonants in a string.
 * @param value Source text.
 * @returns Number of consonants.
 */
export function countConsonants(value: string): number;

/**
 * Converts text into a URL-friendly slug.
 * @param value Source text.
 * @returns Slugified text.
 */
export function slugify(value: string): string;

/**
 * Converts text into camelCase.
 * @param value Source text.
 * @returns camelCase text.
 */
export function camelCase(value: string): string;

/**
 * Converts text into kebab-case.
 * @param value Source text.
 * @returns kebab-case text.
 */
export function kebabCase(value: string): string;

/**
 * Converts text into snake_case.
 * @param value Source text.
 * @returns snake_case text.
 */
export function snakeCase(value: string): string;

/**
 * Truncates a string to a maximum length.
 * @param value Source text.
 * @param maxLength Maximum output length.
 * @param omission Omission marker appended when truncation occurs.
 * @returns Truncated text.
 */
export function truncate(
  value: string,
  maxLength: number,
  omission?: string
): string;

/**
 * Removes whitespace characters from a string.
 * @param value Source text.
 * @returns Compacted text.
 */
export function removeWhitespace(value: string): string;

/**
 * Repeats a string a fixed number of times.
 * @param value Source text.
 * @param count Number of repetitions.
 * @returns Repeated text.
 */
export function repeatString(value: string, count: number): string;

/**
 * Pads a string symmetrically to a target length.
 * @param value Source text.
 * @param targetLength Desired output length.
 * @param padding Padding string.
 * @returns Padded text.
 */
export function padString(
  value: string,
  targetLength: number,
  padding?: string
): string;

/**
 * Masks a string while leaving a trailing suffix visible.
 * @param value Source text.
 * @param visibleCount Number of visible trailing characters.
 * @param maskCharacter Single-character mask value.
 * @returns Masked text.
 */
export function maskString(
  value: string,
  visibleCount: number,
  maskCharacter?: string
): string;

/**
 * Extracts uppercase initials from a phrase.
 * @param value Source text.
 * @returns Initials.
 */
export function extractInitials(value: string): string;

/**
 * Checks whether a string contains a substring.
 * @param value Source text.
 * @param substring Substring to locate.
 * @returns True when the substring is present.
 */
export function containsSubstring(value: string, substring: string): boolean;

/**
 * Replaces all literal occurrences of a substring.
 * @param value Source text.
 * @param searchValue Text to replace.
 * @param replacement Replacement text.
 * @returns Updated text.
 */
export function replaceAllOccurrences(
  value: string,
  searchValue: string,
  replacement: string
): string;

/**
 * Converts text into title case.
 * @param value Source text.
 * @returns Title-cased text.
 */
export function toTitleCase(value: string): string;

/**
 * Counts normalized words in a string.
 * @param value Source text.
 * @returns Number of words.
 */
export function countWords(value: string): number;
