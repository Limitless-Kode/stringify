import Ncrypt from './ncrypt';

require('dotenv').config();
export default class Stringify extends Ncrypt{
  constructor(key?: string) {
    super(process.env.ENCRYPTION_KEY || key as string);
  }

  /**
   * Converts JSON string to a JSON Object
   * @param value
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
   * @param value
   */
  static toString(value: string) {
    return JSON.stringify(value);
  }

  // =====================================================================
  // String Encryption's and Decryption
  // =====================================================================

  /**
   * Encrypts string
   * @param value
   */
  static toEncryptedString(value: any) {
    try{
      const stringify = new Stringify();
      return stringify.encrypt(JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  }

  /**
   * Decrypts encrypted string to plain text
   * @param value
   */
  static toDecryptedString(value: string) {
    try{
      const stringify = new Stringify();
      return stringify.decrypt(value);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Decrypts string to JSON object be sure that the encrypted data was a json object
   * @param value
   */
  static toDecryptedJSON(value: string) {
    try{
      const stringify = new Stringify();
      return JSON.parse(stringify.decrypt(value));
    } catch (error: any) {
      throw error;
    }
  }

  // =====================================================================
  // Case conversion
  // =====================================================================

  /**
   * Converts str value to camel case. Eg. example_sentence: exampleSentence
   * @param str
   */
  static toCamelCase(str: string): string {
    return str.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  }

  /**
   * Converts str value to snake case. Eg. exampleSentence: example_sentence
   * @param str
   */
  static toSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : '_' + letter.toLowerCase();
    });
  }

  /**
   * Converts str value to Kebab case. Eg. example_sentence: example-sentence
   * @param str
   * @returns {string}
   */
  static toKebabCase(str: string): string {
    return str.replace(/[A-Z]/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : '-' + letter.toLowerCase().trim();
    });
  }

  /**
   * Converts str value to sentence case. Eg. example sentence: Example sentence
   * @param str
   * @returns {string}
   */
  static toSentenceCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Converts str value to Title case.
   * @example
   * example sentence returns Example Sentence
   * @param str
   * @returns {string}
   */
  static toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  /**
   * Converts str value to sentence case.
   * @example
   * // Returns "EXAMPLE SENTENCE"
   * Stringify.toUpperCase("example sentence")
   * @param str
   * @returns {string}
   */
  static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  /**
   * Converts str value to sentence case.
   * @example
   * // Returns "example sentence"
   * Stringify.toLowerCase("Example Sentence")
   * @param str
   */
  static toLowerCase(str: string): string {
    return str.toLowerCase();
  }


  // =====================================================================
  // URL Encoding
  // =====================================================================

  static encodeQueryString(params: Record<string, any>): string {
    const queryParams = new URLSearchParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        queryParams.append(key, params[key]);
      }
    }
    return queryParams.toString();
  }

  static decodeQueryString(queryString: string): Record<string, any> {
    const queryParams = new URLSearchParams(queryString);
    const result: Record<string, any> = {};
    for (const [key, value] of queryParams.entries()) {
      result[key] = value;
    }
    return result;
  }

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

  static formatString(template: string, values: Record<string, any>): string {
    return template.replace(/\${(.*?)}/g, (_, key) => {
      return values[key];
    });
  }

  static padLeft(str: string, length: number, paddingChar: string = " "): string {
    const padding = paddingChar.repeat(length);
    return (padding + str).slice(-length);
  }

  static padRight(str: string, length: number, paddingChar: string = " "): string {
    const padding = paddingChar.repeat(length);
    return (str + padding).slice(0, length);
  }

  static truncate(str: string, maxLength: number, suffix: string = "..."): string {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - suffix.length) + suffix;
    } else {
      return str;
    }
  }


}