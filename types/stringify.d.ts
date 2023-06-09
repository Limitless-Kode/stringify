import Ncrypt from './ncrypt';
/**
 * The Stringify class provides a set of utility methods for working with strings.
 * It extends the Ncrypt class for encryption and decryption capabilities.
 */
export default class Stringify extends Ncrypt {
    constructor(key?: string);
    /**
     * Converts a JSON string to a JSON Object
     * @param value - A JSON string
     * @returns - A JSON Object
     * @example
     * const jsonString = '{"name":"John","age":30,"city":"New York"}';
     * const jsonObject = Stringify.toJson(jsonString);
     * console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }
     */
    static toJson(value: string): object;
    /**
     * Converts a valid JSON object to a string
     * @param value - A JSON object
     * @returns - A JSON string
     * @example
     * const jsonObject = { name: 'John', age: 30, city: 'New York' };
     * const jsonString = Stringify.toString(jsonObject);
     * console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'
     */
    static toString(value: object): string;
    /**
     * Encrypts a string using the encryption key
     * @param value - The string to encrypt
     * @returns - The encrypted string
     * @example
     * const plaintext = 'my secret message';
     * const encrypted = Stringify.toEncryptedString(plaintext);
     * console.log(encrypted); // Encrypted string
     */
    static toEncryptedString(value: any): string;
    /**
     * Decrypts an encrypted string to plain text using the encryption key
     * @param value - The encrypted string
     * @returns - The decrypted string
     * @example
     * const encrypted = 'Encrypted string';
     * const plaintext = Stringify.toDecryptedString(encrypted);
     * console.log(plaintext); // 'my secret message'
     */
    static toDecryptedString(value: string): any;
    /**
     * Decrypts an encrypted string to a JSON object using the encryption key
     * @param value - The encrypted JSON string
     * @returns - The decrypted JSON object
     * @example
     * const encrypted = 'Encrypted JSON string';
     * const jsonObject = Stringify.toDecryptedJSON(encrypted);
     * console.log(jsonObject); // Decrypted JSON object
     */
    static toDecryptedJSON(value: string): any;
    /**
     * Converts a string to camel case
     * @param str - The string to convert
     * @returns - The camel case string
     * @example
     * const sentence = 'example_sentence';
     * const camelCase = Stringify.toCamelCase(sentence);
     * console.log(camelCase); // 'exampleSentence'
     */
    static toCamelCase(str: string): string;
    /**
     * Converts a string to snake case
     * @param str - The string to convert
     * @returns - The snake case string
     * @example
     * const sentence = 'exampleSentence';
     * const snakeCase = Stringify.toSnakeCase(sentence);
     * console.log(snakeCase); // 'example_sentence'
     */
    static toSnakeCase(str: string): string;
    /**
     * Converts a string to kebab case
     * @param str - The string to convert
     * @returns - The kebab case string
     * @example
     * const sentence = 'example_sentence';
     * const kebabCase = Stringify.toKebabCase(sentence);
     * console.log(kebabCase); // 'example-sentence'
     */
    static toKebabCase(str: string): string;
    /**
     * Converts a string to sentence case
     * @param str - The string to convert
     * @returns - The sentence case string
     * @example
     * const sentence = 'this is an example sentence.';
     * const sentenceCase = Stringify.toSentenceCase(sentence);
     * console.log(sentenceCase); // 'This is an example sentence.'
     */
    static toSentenceCase(str: string): string;
    /**
     * Converts a string value to Title Case.
     * @example
     * // Returns "Example Sentence"
     * Stringify.toTitleCase("example sentence");
     * @param {string} str - The string to convert to Title Case.
     * @returns {string} The converted string.
     */
    static toTitleCase(str: string): string;
    /**
     * Converts a string value to Uppercase.
     * @example
     * // Returns "EXAMPLE SENTENCE"
     * Stringify.toUpperCase("example sentence");
     * @param {string} str - The string to convert to Uppercase.
     * @returns {string} The converted string.
     */
    static toUpperCase(str: string): string;
    /**
     * Converts a string value to Lowercase.
     * @example
     * // Returns "example sentence"
     * Stringify.toLowerCase("Example Sentence");
     * @param {string} str - The string to convert to Lowercase.
     * @returns {string} The converted string.
     */
    static toLowerCase(str: string): string;
    /**
     * Encodes an object into a query string.
     * @example
     * // Returns "param1=value1&param2=value2"
     * Stringify.encodeQueryString({ param1: "value1", param2: "value2" });
     * @param {object} params - The object to encode into a query string.
     * @returns {string} The encoded query string.
     */
    static encodeQueryString(params: Record<string, any>): string;
    /**
     * Decodes a query string into an object.
     * @example
     * // Returns { param1: "value1", param2: "value2" }
     * Stringify.decodeQueryString("param1=value1&param2=value2");
     * @param {string} queryString - The query string to decode into an object.
     * @returns {object} The decoded object.
     */
    static decodeQueryString(queryString: string): Record<string, any>;
    /**
     * Parses a URL into an object.
     * @example
     * // Returns { protocol: "http:", hostname: "example.com", port: "", pathname: "/", search: "?param1=value1&param2=value2" }
     * Stringify.parseUrl("http://example.com/?param1=value1&param2=value2");
     * @param {string} url - The URL to parse into an object.
     * @returns {object} The parsed object.
     */
    static parseUrl(url: string): Record<string, any>;
    /**
     * Formats a string template with the given values.
     * @example
     * // Returns "Hello, John!"
     * Stringify.formatString("Hello, ${name}!", { name: "John" });
     * @param {string} template The string template to format.
     * @param {Record<string, any>} values The values to replace in the template.
     * @returns {string} The formatted string.
     */
    static formatString(template: string, values: Record<string, any>): string;
    /**
     * Pads the left side of a string with a padding character until it reaches the given length.
     * @example
     * // Returns "  abc"
     * Stringify.padLeft("abc", 4);
     * @param {string} str The string to pad.
     * @param {number} length The desired length of the string after padding.
     * @param {string} [paddingChar=" "] The character to use for padding. Defaults to " ".
     * @returns {string} The padded string.
     */
    static padLeft(str: string, length: number, paddingChar?: string): string;
    /**
     * Pads the right side of a string with a padding character until it reaches the given length.
     * @example
     * // Returns "abc  "
     * Stringify.padRight("abc", 4);
     * @param {string} str The string to pad.
     * @param {number} length The desired length of the string after padding.
     * @param {string} [paddingChar=" "] The character to use for padding. Defaults to " ".
     * @returns {string} The padded string.
     */
    static padRight(str: string, length: number, paddingChar?: string): string;
    /**
     * Truncates a string to the given maximum length, adding a suffix if necessary.
     * @example
     * // Returns "Hello, ..."
     * Stringify.truncate("Hello, world!", 8);
     * @param {string} str The string to truncate.
     * @param {number} maxLength The maximum length of the truncated string.
     * @param {string} [suffix="..."] The suffix to add if the string is truncated. Defaults to "...".
     * @returns {string} The truncated string.
     */
    static truncate(str: string, maxLength: number, suffix?: string): string;
    /**
     * Replaces the first occurrence of a specified substring with a replacement string.
     * @param str
     * @param oldSubstring - The substring to replace.
     * @param newSubstring - The replacement substring.
     * @returns The modified string with the first occurrence of the old substring replaced.
     */
    static replace(str: string, oldSubstring: string, newSubstring: string): string;
    /**
     * Replaces all occurrences of a specified substring with a replacement string.
     * @param str
     * @param oldSubstring - The substring to replace.
     * @param newSubstring - The replacement substring.
     * @returns The modified string with all occurrences of the old substring replaced.
     */
    static replaceAll(str: string, oldSubstring: string, newSubstring: string): string;
    /**
     * Removes leading/trailing spaces and replaces multiple consecutive spaces with a single space.
     *
     * @param {string} value - The string to remove whitespace from.
     * @returns {string} A new string with whitespace removed.
     */
    static removeWhitespace(value: string): string;
    /**
     * Reverses the characters of a string.
     * @param value - The input string to reverse.
     * @returns The reversed string.
     */
    static reverse(value: string): string;
    /**
     * Reverses the order of words in the string.
     * @returns The string with the order of words reversed.
     */
    static reverseWords(str: string): string;
    /**
     * Shuffles the characters of a string.
     * @param str - The input string to shuffle.
     * @returns The shuffled string.
     */
    static shuffle(str: string): string;
    /**
     * Returns a boolean indicating whether the string contains a specified substring.
     * @param str
     * @param substring - The substring to search for.
     * @returns `true` if the string contains the substring, otherwise `false`.
     */
    static contains(str: string, substring: string): boolean;
    /**
     * Returns the number of times a specified substring appears in the string.
     * @param str
     * @param substring - The substring to count occurrences of.
     * @returns The number of times the substring appears in the string.
     */
    static countOccurrences(str: string, substring: string): number;
    /**
     * Converts the string to a URL-friendly slug.
     * @param str
     * @returns The slugified string.
     */
    static slugify(str: string): string;
    /**
     * Returns a boolean indicating whether the string contains any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string contains any of the specified substrings; otherwise false.
     */
    static containsAny(str: string, substrings: string[]): boolean;
    /**
     * Returns a boolean indicating whether the string starts with any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string starts with any of the specified substrings; otherwise false.
     */
    static startsWithAny(str: string, substrings: string[]): boolean;
    /**
     * Returns a boolean indicating whether the string ends with any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string ends with any of the specified substrings; otherwise false.
     */
    static endsWithAny(str: string, substrings: string[]): boolean;
    /**
     * Checks if a string is a palindrome (reads the same forwards and backwards).
     *
     * @param {string} value - The string to check.
     * @returns {boolean} Whether the string is a palindrome.
     */
    static isPalindrome(value: string): boolean;
    /**
     * Checks if a string contains only numeric characters.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} Whether the string contains only numeric characters.
     */
    static isNumeric(value: string): boolean;
    /**
     * Determines whether a string is a valid email address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid email address, `false` otherwise.
     */
    static isEmail(value: string): boolean;
    /**
     * Determines whether a string is a valid IPv4 address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid IPv4 address, `false` otherwise.
     */
    static isIpv4Address(value: string): boolean;
    /**
     * Determines whether a string is a valid IPv6 address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid IPv6 address, `false` otherwise.
     */
    static isIpv6Address(value: string): boolean;
    /**
     * Strips HTML tags from a string.
     *
     * @param {string} value - The string to strip tags from.
     * @returns {string} A new string with all HTML tags removed.
     */
    static stripTags(value: string): string;
    /**
     * Encodes HTML entities in a string.
     *
     * @param {string} value - The string to encode.
     * @returns {string} A new string with all HTML entities encoded.
     */
    /**
     * Encodes HTML entities in a string.
     * @param value - The string to encode.
     * @returns The encoded string.
     */
    static encodeHtmlEntities(value: string): string;
    /**
     * Decodes HTML entities in a string.
     * @param value - The string to decode.
     * @returns The decoded string.
     */
    static decodeHtmlEntities(value: string): string;
    private static domParser;
    private static buildXml;
    private static buildJson2;
    private static buildJson;
    private static isPlural;
    /**
     * Converts JSON string to XML
     * @example
     * // Returns "<name>Claver</name>"
     * Stringify.jsonToXml({name: Claver});
     * @param {string} jsonData The string to convert.
     * @returns {string} The truncated string.
     */
    static jsonToXml(jsonData: string): string;
    /**
     * Converts XML to JSON object
     * @example
     * // Returns {name: Claver}
     * Stringify.xmlToJson("<name>Claver</name>");
     * @param {string} xmlData The string to convert.
     * @returns {object} The JSON object.
     */
    static xmlToJson(xmlData: string): object;
}
