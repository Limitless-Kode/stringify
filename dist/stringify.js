"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ncrypt_1 = __importDefault(require("./ncrypt"));
const xmldom_1 = require("xmldom");
global.DOMParser = xmldom_1.DOMParser;
const dotenv_1 = __importDefault(require("dotenv"));
const dom_parser_mock_1 = __importDefault(require("./dom-parser-mock"));
dotenv_1.default.config();
/**
 * The Stringify class provides a set of utility methods for working with strings.
 * It extends the Ncrypt class for encryption and decryption capabilities.
 */
class Stringify extends ncrypt_1.default {
    constructor(key) {
        super(process.env.ENCRYPTION_KEY || key);
    }
    /**
     * Converts a JSON string to a JSON Object
     * @param value - A JSON string
     * @returns - A JSON Object
     * @example
     * const jsonString = '{"name":"John","age":30,"city":"New York"}';
     * const jsonObject = Stringify.toJson(jsonString);
     * console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }
     */
    static toJson(value) {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Converts a valid JSON object to a string
     * @param value - A JSON object
     * @returns - A JSON string
     * @example
     * const jsonObject = { name: 'John', age: 30, city: 'New York' };
     * const jsonString = Stringify.toString(jsonObject);
     * console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'
     */
    static toString(value) {
        return JSON.stringify(value);
    }
    // =====================================================================
    // String Encryption's and Decryption
    // =====================================================================
    /**
     * Encrypts a string using the encryption key
     * @param value - The string to encrypt
     * @returns - The encrypted string
     * @example
     * const plaintext = 'my secret message';
     * const encrypted = Stringify.toEncryptedString(plaintext);
     * console.log(encrypted); // Encrypted string
     */
    static toEncryptedString(value) {
        try {
            const stringify = new Stringify();
            return stringify.encrypt(JSON.stringify(value));
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Decrypts an encrypted string to plain text using the encryption key
     * @param value - The encrypted string
     * @returns - The decrypted string
     * @example
     * const encrypted = 'Encrypted string';
     * const plaintext = Stringify.toDecryptedString(encrypted);
     * console.log(plaintext); // 'my secret message'
     */
    static toDecryptedString(value) {
        try {
            const stringify = new Stringify();
            return JSON.parse(stringify.decrypt(value));
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Decrypts an encrypted string to a JSON object using the encryption key
     * @param value - The encrypted JSON string
     * @returns - The decrypted JSON object
     * @example
     * const encrypted = 'Encrypted JSON string';
     * const jsonObject = Stringify.toDecryptedJSON(encrypted);
     * console.log(jsonObject); // Decrypted JSON object
     */
    static toDecryptedJSON(value) {
        try {
            const stringify = new Stringify();
            return JSON.parse(stringify.decrypt(value));
        }
        catch (error) {
            throw error;
        }
    }
    // =====================================================================
    // Case conversion
    // =====================================================================
    /**
     * Converts a string to camel case
     * @param str - The string to convert
     * @returns - The camel case string
     * @example
     * const sentence = 'example_sentence';
     * const camelCase = Stringify.toCamelCase(sentence);
     * console.log(camelCase); // 'exampleSentence'
     */
    static toCamelCase(str) {
        return str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
    }
    /**
     * Converts a string to snake case
     * @param str - The string to convert
     * @returns - The snake case string
     * @example
     * const sentence = 'exampleSentence';
     * const snakeCase = Stringify.toSnakeCase(sentence);
     * console.log(snakeCase); // 'example_sentence'
     */
    static toSnakeCase(str) {
        return str.replace(/([A-Z])|(\s+)|(-+)/g, (match, p1, p2, p3, index) => {
            if (p1) {
                return (index === 0 ? '' : '_') + p1.toLowerCase();
            }
            else if (p2 || p3) {
                return '_';
            }
            else {
                return '';
            }
        });
    }
    /**
     * Converts a string to kebab case
     * @param str - The string to convert
     * @returns - The kebab case string
     * @example
     * const sentence = 'example_sentence';
     * const kebabCase = Stringify.toKebabCase(sentence);
     * console.log(kebabCase); // 'example-sentence'
     */
    static toKebabCase(str) {
        return str.replace(/([A-Z])|(\s+)|(_+)/g, (match, p1, p2, p3, index) => {
            if (p1) {
                return (index === 0 ? '' : '-') + p1.toLowerCase();
            }
            else if (p2 || p3) {
                return '-';
            }
            else {
                return '';
            }
        });
    }
    /**
     * Converts a string to sentence case
     * @param str - The string to convert
     * @returns - The sentence case string
     * @example
     * const sentence = 'this is an example sentence.';
     * const sentenceCase = Stringify.toSentenceCase(sentence);
     * console.log(sentenceCase); // 'This is an example sentence.'
     */
    static toSentenceCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    /**
     * Converts a string value to Title Case.
     * @example
     * // Returns "Example Sentence"
     * Stringify.toTitleCase("example sentence");
     * @param {string} str - The string to convert to Title Case.
     * @returns {string} The converted string.
     */
    static toTitleCase(str) {
        return str.replace(/\w\S*/g, (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    }
    /**
     * Converts a string value to Uppercase.
     * @example
     * // Returns "EXAMPLE SENTENCE"
     * Stringify.toUpperCase("example sentence");
     * @param {string} str - The string to convert to Uppercase.
     * @returns {string} The converted string.
     */
    static toUpperCase(str) {
        return str.toUpperCase();
    }
    /**
     * Converts a string value to Lowercase.
     * @example
     * // Returns "example sentence"
     * Stringify.toLowerCase("Example Sentence");
     * @param {string} str - The string to convert to Lowercase.
     * @returns {string} The converted string.
     */
    static toLowerCase(str) {
        return str.toLowerCase();
    }
    // =====================================================================
    // URL Encoding
    // =====================================================================
    /**
     * Encodes an object into a query string.
     * @example
     * // Returns "param1=value1&param2=value2"
     * Stringify.encodeQueryString({ param1: "value1", param2: "value2" });
     * @param {object} params - The object to encode into a query string.
     * @returns {string} The encoded query string.
     */
    static encodeQueryString(params) {
        const queryParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                queryParams.append(key, params[key]);
            }
        }
        return queryParams.toString();
    }
    /**
     * Decodes a query string into an object.
     * @example
     * // Returns { param1: "value1", param2: "value2" }
     * Stringify.decodeQueryString("param1=value1&param2=value2");
     * @param {string} queryString - The query string to decode into an object.
     * @returns {object} The decoded object.
     */
    static decodeQueryString(queryString) {
        const queryParams = new URLSearchParams(queryString);
        const result = {};
        for (const [key, value] of queryParams.entries()) {
            result[key] = value;
        }
        return result;
    }
    /**
     * Parses a URL into an object.
     * @example
     * // Returns { protocol: "http:", hostname: "example.com", port: "", pathname: "/", search: "?param1=value1&param2=value2" }
     * Stringify.parseUrl("http://example.com/?param1=value1&param2=value2");
     * @param {string} url - The URL to parse into an object.
     * @returns {object} The parsed object.
     */
    static parseUrl(url) {
        const parsedUrl = new URL(url);
        const result = {
            protocol: parsedUrl.protocol,
            hostname: parsedUrl.hostname,
            port: parsedUrl.port,
            pathname: parsedUrl.pathname,
        };
        for (const [key, value] of parsedUrl.searchParams.entries()) {
            result[key] = value;
        }
        return result;
    }
    // =====================================================================
    // String formatting
    // =====================================================================
    /**
     * Formats a string template with the given values.
     * @example
     * // Returns "Hello, John!"
     * Stringify.formatString("Hello, ${name}!", { name: "John" });
     * @param {string} template The string template to format.
     * @param {Record<string, any>} values The values to replace in the template.
     * @returns {string} The formatted string.
     */
    static formatString(template, values) {
        return template.replace(/\${(.*?)}/g, (_, key) => {
            return values[key];
        });
    }
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
    static padLeft(str, length, paddingChar = ' ') {
        const padding = paddingChar.repeat(length);
        return (padding + str).slice(-length);
    }
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
    static padRight(str, length, paddingChar = ' ') {
        const padding = paddingChar.repeat(length);
        return (str + padding).slice(0, length);
    }
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
    static truncate(str, maxLength, suffix = '...') {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - suffix.length) + suffix;
        }
        else {
            return str;
        }
    }
    /**
     * Replaces the first occurrence of a specified substring with a replacement string.
     * @param str
     * @param oldSubstring - The substring to replace.
     * @param newSubstring - The replacement substring.
     * @returns The modified string with the first occurrence of the old substring replaced.
     */
    static replace(str, oldSubstring, newSubstring) {
        if (oldSubstring === "") {
            return str;
        }
        return str.replace(new RegExp(oldSubstring, "g"), newSubstring);
    }
    /**
     * Replaces all occurrences of a specified substring with a replacement string.
     * @param str
     * @param oldSubstring - The substring to replace.
     * @param newSubstring - The replacement substring.
     * @returns The modified string with all occurrences of the old substring replaced.
     */
    static replaceAll(str, oldSubstring, newSubstring) {
        // Use a regular expression to match all occurrences of the old substring.
        const regex = new RegExp(oldSubstring, 'g');
        return str.replace(regex, newSubstring);
    }
    /**
     * Removes leading/trailing spaces and replaces multiple consecutive spaces with a single space.
     *
     * @param {string} value - The string to remove whitespace from.
     * @returns {string} A new string with whitespace removed.
     */
    static removeWhitespace(value) {
        return value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    }
    /**
     * Reverses the characters of a string.
     * @param value - The input string to reverse.
     * @returns The reversed string.
     */
    static reverse(value) {
        return value.split("").reverse().join("");
    }
    /**
     * Reverses the order of words in the string.
     * @returns The string with the order of words reversed.
     */
    static reverseWords(str) {
        // Split the string into an array of words, reverse the order, and join back into a string.
        const words = str.split(/\s+/);
        return words.reverse().join(' ');
    }
    /**
     * Shuffles the characters of a string.
     * @param str - The input string to shuffle.
     * @returns The shuffled string.
     */
    static shuffle(str) {
        const arr = str.split("");
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap the current element with the random element.
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join("");
    }
    /**
     * Returns a boolean indicating whether the string contains a specified substring.
     * @param str
     * @param substring - The substring to search for.
     * @returns `true` if the string contains the substring, otherwise `false`.
     */
    static contains(str, substring) {
        return str.includes(substring);
    }
    /**
     * Returns the number of times a specified substring appears in the string.
     * @param str
     * @param substring - The substring to count occurrences of.
     * @returns The number of times the substring appears in the string.
     */
    static countOccurrences(str, substring) {
        // Use a regular expression to match all occurrences of the substring.
        const regex = new RegExp(substring, 'g');
        const matches = str.match(regex);
        // Return the number of matches.
        return matches ? matches.length : 0;
    }
    /**
     * Converts the string to a URL-friendly slug.
     * @param str
     * @returns The slugified string.
     */
    static slugify(str) {
        return str
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '-') // Replace one or more spaces with hyphens
            .replace(/_/g, '-') // Replace underscores with hyphens
            .replace(/[^-_\w]+/g, '-') // Replace any remaining non-word, non-space, and non-hyphen characters with a hyphen
            .replace(/[^\w\s-]/g, '') // Remove non-word, non-space, and non-hyphen characters
            .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
    }
    /**
     * Returns a boolean indicating whether the string contains any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string contains any of the specified substrings; otherwise false.
     */
    static containsAny(str, substrings) {
        return substrings.some(substring => str.includes(substring));
    }
    /**
     * Returns a boolean indicating whether the string starts with any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string starts with any of the specified substrings; otherwise false.
     */
    static startsWithAny(str, substrings) {
        return substrings.some(substring => str.startsWith(substring));
    }
    /**
     * Returns a boolean indicating whether the string ends with any of the specified substrings.
     * @param str
     * @param substrings - An array of substrings to search for.
     * @returns True if the string ends with any of the specified substrings; otherwise false.
     */
    static endsWithAny(str, substrings) {
        return substrings.some(substring => str.endsWith(substring));
    }
    /**
     * Checks if a string is a palindrome (reads the same forwards and backwards).
     *
     * @param {string} value - The string to check.
     * @returns {boolean} Whether the string is a palindrome.
     */
    static isPalindrome(value) {
        // Remove all non-alphanumeric characters and convert to lowercase
        const alphanumericValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");
        // Check if the alphanumericValue reads the same forwards and backwards
        return alphanumericValue === alphanumericValue.split("").reverse().join("");
    }
    /**
     * Checks if a string contains only numeric characters.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} Whether the string contains only numeric characters.
     */
    static isNumeric(value) {
        // Check if the value contains only digits
        return /^\d+$/.test(value);
    }
    /**
     * Determines whether a string is a valid email address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid email address, `false` otherwise.
     */
    static isEmail(value) {
        // Regular expression for checking email address format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
    /**
     * Determines whether a string is a valid IPv4 address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid IPv4 address, `false` otherwise.
     */
    static isIpv4Address(value) {
        // Regular expression for checking IPv4 address format
        const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipv4Regex.test(value)) {
            return false;
        }
        // Split the address into its components and check that each component is within the valid range (0-255)
        const components = value.split(".");
        for (const component of components) {
            const num = parseInt(component);
            if (isNaN(num) || num < 0 || num > 255) {
                return false;
            }
        }
        return true;
    }
    /**
     * Determines whether a string is a valid IPv6 address.
     *
     * @param {string} value - The string to check.
     * @returns {boolean} `true` if the string is a valid IPv6 address, `false` otherwise.
     */
    static isIpv6Address(value) {
        // Regular expression for checking IPv6 address format
        const ipv6Regex = /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/;
        return ipv6Regex.test(value);
    }
    /**
     * Strips HTML tags from a string.
     *
     * @param {string} value - The string to strip tags from.
     * @returns {string} A new string with all HTML tags removed.
     */
    static stripTags(value) {
        // Regular expression for matching HTML tags
        const tagRegex = /<\/?[^>]+>/gi;
        return value.replace(tagRegex, "");
    }
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
    static encodeHtmlEntities(value) {
        const entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;',
            '\u00A0': '&nbsp;',
            '’': '&rsquo;',
            '‘': '&lsquo;',
            '”': '&rdquo;',
            '“': '&ldquo;',
            '©': '&copy;',
            '®': '&reg;',
            '™': '&trade;',
            '€': '&euro;',
            '£': '&pound;',
            '¥': '&yen;',
        };
        return value.replace(/[&<>"'\u00A0’‘”“©®™€£¥]/g, match => entityMap[match]);
    }
    /**
     * Decodes HTML entities in a string.
     * @param value - The string to decode.
     * @returns The decoded string.
     */
    static decodeHtmlEntities(value) {
        const entityRegex = /&([a-z]+|#\d+);/gi;
        const entityMap = {
            amp: '&',
            lt: '<',
            gt: '>',
            quot: '"',
            apos: "'",
            nbsp: '\u00A0',
            rsquo: '’',
            lsquo: '‘',
            rdquo: '”',
            ldquo: '“',
            copy: '©',
            reg: '®',
            trade: '™',
            euro: '€',
            pound: '£',
            yen: '¥',
        };
        return value.replace(entityRegex, (match, entity) => {
            const decoded = entityMap[entity.toLowerCase()];
            if (decoded) {
                return decoded;
            }
            if (entity.startsWith('#x')) {
                const codePoint = parseInt(entity.substring(2), 16);
                return isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
            }
            if (entity.startsWith('#')) {
                const codePoint = parseInt(entity.substring(1), 10);
                return isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
            }
            return match;
        });
    }
    static buildXml(data) {
        let xmlStr = '';
        if (typeof data === 'object') {
            for (const [key, value] of Object.entries(data)) {
                if (Array.isArray(value)) {
                    xmlStr += `<${key}>`;
                    for (const item of value) {
                        xmlStr += `${Stringify.buildXml({ [key.slice(0, -1)]: item })}`;
                    }
                    xmlStr += `</${key}>`;
                }
                else if (typeof value === 'object') {
                    xmlStr += `<${key}>${Stringify.buildXml(value)}</${key}>`;
                }
                else {
                    xmlStr += `<${key}>${value}</${key}>`;
                }
            }
        }
        return xmlStr;
    }
    static buildJson2(xmlNode) {
        const jsonObj = {};
        if (xmlNode.hasAttributes()) {
            const attributes = Array.from(xmlNode.attributes);
            for (const attr of attributes) {
                jsonObj['@' + attr.name] = attr.value;
            }
        }
        if (xmlNode.hasChildNodes()) {
            const childNodes = Array.from(xmlNode.childNodes);
            for (const childNode of childNodes) {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    return childNode.nodeValue;
                }
                else if (childNode.nodeType === Node.ELEMENT_NODE) {
                    if (jsonObj[childNode.nodeName]) {
                        if (!Array.isArray(jsonObj[childNode.nodeName])) {
                            // if this is the second child node with this name, create an array
                            jsonObj[childNode.nodeName] = [jsonObj[childNode.nodeName]];
                        }
                        jsonObj[childNode.nodeName].push(Stringify.buildJson(childNode));
                    }
                    else if (childNode.nodeName === 'address') {
                        // if this is the 'address' node, create an object for it
                        jsonObj[childNode.nodeName] = Stringify.buildJson(childNode);
                    }
                    else if (childNode.childNodes.length === 1) {
                        // if this node only has one child node, just add its value to the object
                        jsonObj[childNode.nodeName] = Stringify.buildJson(childNode);
                    }
                    else {
                        // if this node has multiple child nodes with the same name, create an array
                        jsonObj[childNode.nodeName] = [];
                        for (const nestedChildNode of Array.from(childNode.childNodes)) {
                            jsonObj[childNode.nodeName].push(Stringify.buildJson(nestedChildNode));
                        }
                    }
                }
            }
        }
        return jsonObj;
    }
    static buildJson(xml) {
        const jsonObj = {};
        if (xml.hasChildNodes()) {
            const childNodes = Array.from(xml.childNodes);
            for (const el of childNodes) {
                if (el.nodeType === Node.TEXT_NODE) {
                    return el.nodeValue;
                }
                else if (el.nodeType === Node.ELEMENT_NODE) {
                    const key = el.tagName;
                    if (jsonObj[key]) {
                        if (!Array.isArray(jsonObj[key])) {
                            jsonObj[key] = [jsonObj[key]];
                        }
                        jsonObj[key].push(Stringify.buildJson(el));
                    }
                    else {
                        jsonObj[key] = Stringify.buildJson(el);
                    }
                }
            }
        }
        return jsonObj;
    }
    static isPlural(parentTagName, tagName) {
        parentTagName = parentTagName.toLowerCase();
        tagName = tagName.toLowerCase();
        return (parentTagName.slice(-1) === 's' &&
            parentTagName.startsWith(tagName) &&
            parentTagName.slice(0, tagName.length) === tagName);
    }
    /**
     * Converts JSON string to XML
     * @example
     * // Returns "<name>Claver</name>"
     * Stringify.jsonToXml({name: Claver});
     * @param {string} jsonData The string to convert.
     * @returns {string} The truncated string.
     */
    static jsonToXml(jsonData) {
        const jsonObj = JSON.parse(jsonData);
        const xmlStr = '<root>' + Stringify.buildXml(jsonObj) + '</root>';
        return xmlStr;
    }
    /**
     * Converts XML to JSON object
     * @example
     * // Returns {name: Claver}
     * Stringify.xmlToJson("<name>Claver</name>");
     * @param {string} xmlData The string to convert.
     * @returns {object} The JSON object.
     */
    static xmlToJson(xmlData) {
        // const parser = new DOMParser();
        const parser = new Stringify.domParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const jsonStr = Stringify.buildJson(xmlDoc.documentElement);
        return Stringify.toJson(Stringify.toString(jsonStr));
    }
}
exports.default = Stringify;
Stringify.domParser = typeof window !== 'undefined' ? window.DOMParser : dom_parser_mock_1.default;
//# sourceMappingURL=stringify.js.map