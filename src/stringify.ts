import Ncrypt from './ncrypt';
import dotenv from 'dotenv';
dotenv.config();

/**
 * The Stringify class provides a set of utility methods for working with strings.
 * It extends the Ncrypt class for encryption and decryption capabilities.
 */
export default class Stringify extends Ncrypt {
  constructor(key?: string) {
    if (process.env.NODE_ENV === 'test') {
      key = '6bef904c684547d18f15a47e09efdbc3';
    }

    super(process.env.ENCRYPTION_KEY || (key as string));
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
  static toJson(value: string) {
    try {
      return JSON.parse(value);
    } catch (error: any) {
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
  static toString(value: object) {
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
  // static toEncryptedString(value: any) {
  //   try {
  //     const stringify = new Stringify();
  //     return stringify.encrypt(JSON.stringify(value));
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  /**
   * Decrypts an encrypted string to plain text using the encryption key
   * @param value - The encrypted string
   * @returns - The decrypted string
   * @example
   * const encrypted = 'Encrypted string';
   * const plaintext = Stringify.toDecryptedString(encrypted);
   * console.log(plaintext); // 'my secret message'
   */
  // static toDecryptedString(value: string) {
  //   try {
  //     const stringify = new Stringify();
  //     return JSON.parse(stringify.decrypt(value));
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  /**
   * Decrypts an encrypted string to a JSON object using the encryption key
   * @param value - The encrypted JSON string
   * @returns - The decrypted JSON object
   * @example
   * const encrypted = 'Encrypted JSON string';
   * const jsonObject = Stringify.toDecryptedJSON(encrypted);
   * console.log(jsonObject); // Decrypted JSON object
   */
  // static toDecryptedJSON(value: string) {
  //   try {
  //     const stringify = new Stringify();
  //     return JSON.parse(stringify.decrypt(value));
  //   } catch (error: any) {
  //     throw error;
  //   }
  // }

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
  static toCamelCase(str: string): string {
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
  static toSnakeCase(str: string): string {
    return str.replace(/([A-Z])|(\s+)|(-+)/g, (match, p1, p2, p3, index) => {
      if (p1) {
        return (index === 0 ? '' : '_') + p1.toLowerCase();
      } else if (p2 || p3) {
        return '_';
      } else {
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
  static toKebabCase(str: string): string {
    return str.replace(/([A-Z])|(\s+)|(_+)/g, (match, p1, p2, p3, index) => {
      if (p1) {
        return (index === 0 ? '' : '-') + p1.toLowerCase();
      } else if (p2 || p3) {
        return '-';
      } else {
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
  static toSentenceCase(str: string): string {
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
  static toTitleCase(str: string): string {
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
  static toUpperCase(str: string): string {
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
  static toLowerCase(str: string): string {
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
  static encodeQueryString(params: Record<string, any>): string {
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
  static decodeQueryString(queryString: string): Record<string, any> {
    const queryParams = new URLSearchParams(queryString);
    const result: Record<string, any> = {};
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
  static parseUrl(url: string): Record<string, any> {
    const parsedUrl = new URL(url);
    const result: Record<string, any> = {
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
  static formatString(template: string, values: Record<string, any>): string {
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
  static padLeft(str: string, length: number, paddingChar: string = ' '): string {
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
  static padRight(str: string, length: number, paddingChar: string = ' '): string {
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
  static truncate(str: string, maxLength: number, suffix: string = '...'): string {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - suffix.length) + suffix;
    } else {
      return str;
    }
  }
}
