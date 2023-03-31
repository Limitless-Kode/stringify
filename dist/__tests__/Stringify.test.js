"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringify_1 = __importDefault(require("../stringify"));
describe('Stringify', () => {
    describe('toJson', () => {
        test('converts a valid JSON string to a JSON object', () => {
            const jsonString = '{"name":"John","age":30,"city":"New York"}';
            const jsonObject = stringify_1.default.toJson(jsonString);
            expect(jsonObject).toEqual({ name: 'John', age: 30, city: 'New York' });
        });
        test('throws an error when passed an invalid JSON string', () => {
            const jsonString = 'not a valid json string';
            expect(() => stringify_1.default.toJson(jsonString)).toThrow();
        });
    });
    describe('toString', () => {
        test('converts a valid JSON object to a JSON string', () => {
            const jsonObject = { name: 'John', age: 30, city: 'New York' };
            const jsonString = stringify_1.default.toString(jsonObject);
            expect(jsonString).toEqual('{"name":"John","age":30,"city":"New York"}');
        });
    });
    describe('toEncryptedString and toDecryptedString', () => {
        test('encrypts and decrypts a string', () => {
            const plaintext = 'my secret message';
            const encrypted = stringify_1.default.toEncryptedString(plaintext);
            const decrypted = stringify_1.default.toDecryptedString(encrypted);
            expect(decrypted).toEqual(plaintext);
        });
        test('throws an error when passed an invalid encrypted string', () => {
            const encrypted = 'not a valid encrypted string';
            expect(() => stringify_1.default.toDecryptedString(encrypted)).toThrow();
        });
    });
    describe('toDecryptedJSON', () => {
        test('decrypts an encrypted JSON string to a JSON object', () => {
            const encrypted = stringify_1.default.toEncryptedString({ name: 'John', age: 30, city: 'New York' });
            const jsonObject = stringify_1.default.toDecryptedJSON(encrypted);
            expect(jsonObject).toEqual({ name: 'John', age: 30, city: 'New York' });
        });
    });
    describe('toCamelCase', () => {
        test('converts a string to camel case', () => {
            const sentence = 'example_sentence';
            const camelCase = stringify_1.default.toCamelCase(sentence);
            expect(camelCase).toEqual('exampleSentence');
        });
    });
    describe('toSnakeCase', () => {
        test('converts a string to snake case', () => {
            const sentence = 'example-sentence';
            const snakeCase = stringify_1.default.toSnakeCase(sentence);
            expect(snakeCase).toEqual('example_sentence');
        });
    });
    describe('toKebabCase', () => {
        test('converts a string to kebab case', () => {
            const sentence = 'example_sentence';
            const kebabCase = stringify_1.default.toKebabCase(sentence);
            expect(kebabCase).toEqual('example-sentence');
        });
    });
    describe('toSentenceCase', () => {
        test('converts a string to sentence case', () => {
            const sentence = 'this is an example sentence.';
            const sentenceCase = stringify_1.default.toSentenceCase(sentence);
            expect(sentenceCase).toEqual('This is an example sentence.');
        });
    });
    describe('toTitleCase()', () => {
        it('should convert a string to title case', () => {
            const result = stringify_1.default.toTitleCase('example sentence');
            expect(result).toBe('Example Sentence');
        });
    });
    describe('toUpperCase()', () => {
        it('should convert a string to uppercase', () => {
            const result = stringify_1.default.toUpperCase('example sentence');
            expect(result).toBe('EXAMPLE SENTENCE');
        });
    });
    describe('toLowerCase()', () => {
        it('should convert a string to lowercase', () => {
            const result = stringify_1.default.toLowerCase('Example Sentence');
            expect(result).toBe('example sentence');
        });
    });
    describe('encodeQueryString()', () => {
        it('should encode an object into a query string', () => {
            const result = stringify_1.default.encodeQueryString({
                param1: 'value1',
                param2: 'value2',
            });
            expect(result).toBe('param1=value1&param2=value2');
        });
    });
    describe('decodeQueryString()', () => {
        it('should decode a query string into an object', () => {
            const result = stringify_1.default.decodeQueryString('param1=value1&param2=value2');
            expect(result).toEqual({
                param1: 'value1',
                param2: 'value2',
            });
        });
    });
    describe('parseUrl()', () => {
        it('should parse a URL into an object', () => {
            const result = stringify_1.default.parseUrl('http://example.com/?param1=value1&param2=value2');
            expect(result).toEqual({
                protocol: 'http:',
                hostname: 'example.com',
                port: '',
                pathname: '/',
                param1: 'value1',
                param2: 'value2',
            });
        });
    });
    describe('formatString()', () => {
        it('should format a string template with the given values', () => {
            const result = stringify_1.default.formatString('Hello, ${name}!', { name: 'John' });
            expect(result).toBe('Hello, John!');
        });
    });
    describe('padLeft()', () => {
        it('should pad the left side of a string with a padding character until it reaches the given length', () => {
            const result = stringify_1.default.padLeft('abc', 5, '_');
            expect(result).toBe('__abc');
        });
        it('should pad the left side of a string with spaces by default', () => {
            const result = stringify_1.default.padLeft('abc', 4);
            expect(result).toBe(' abc');
        });
    });
    describe('padRight()', () => {
        it('should pad the right side of a string with a padding character until it reaches the given length', () => {
            const result = stringify_1.default.padRight('abc', 4, '_');
            expect(result).toBe('abc_');
        });
        it('should pad the right side of a string with spaces by default', () => {
            const result = stringify_1.default.padRight('abc', 4);
            expect(result).toBe('abc ');
        });
    });
    describe('Stringify.replace', () => {
        it('should replace all occurrences of a substring with a new substring', () => {
            const input = 'hello world';
            const expectedOutput = 'hello universe';
            const actualOutput = stringify_1.default.replace(input, 'world', 'universe');
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should replace only the first occurrence of a substring with a new substring', () => {
            const input = 'hello world';
            const expectedOutput = 'hello universe';
            const actualOutput = stringify_1.default.replace(input, 'world', 'universe');
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should not modify the original string', () => {
            const input = 'hello world';
            stringify_1.default.replace(input, 'world', 'universe');
            expect(input).toEqual('hello world');
        });
        it('should handle empty strings as input', () => {
            const input = '';
            const expectedOutput = '';
            const actualOutput = stringify_1.default.replace(input, 'a', 'b');
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should handle empty substring parameters', () => {
            const input = 'hello world';
            const expectedOutput = 'hello world';
            const actualOutput = stringify_1.default.replace(input, '', 'b');
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Stringify.replaceAll', () => {
        describe('when given an empty string', () => {
            it('should return an empty string', () => {
                const input = '';
                const expectedOutput = '';
                const actualOutput = stringify_1.default.replaceAll(input, 'a', 'b');
                expect(actualOutput).toEqual(expectedOutput);
            });
        });
        describe('when given a string with no occurrences of the old substring', () => {
            it('should return the original string', () => {
                const input = 'hello world';
                const expectedOutput = 'hello world';
                const actualOutput = stringify_1.default.replaceAll(input, 'a', 'b');
                expect(actualOutput).toEqual(expectedOutput);
            });
        });
        describe('when given a string with one occurrence of the old substring', () => {
            it('should replace the old substring with the new substring', () => {
                const input = 'hello world';
                const expectedOutput = 'hello friend';
                const actualOutput = stringify_1.default.replaceAll(input, 'world', 'friend');
                expect(actualOutput).toEqual(expectedOutput);
            });
        });
        describe('when given a string with multiple occurrences of the old substring', () => {
            it('should replace all occurrences of the old substring with the new substring', () => {
                const input = 'hello galaxy, hello universe';
                const expectedOutput = 'hi galaxy, hi universe';
                const actualOutput = stringify_1.default.replaceAll(input, 'hello', 'hi');
                expect(actualOutput).toEqual(expectedOutput);
            });
        });
        describe('when given empty old and new substrings', () => {
            it('should return the original string', () => {
                const input = 'hello world';
                const expectedOutput = 'hello world';
                const actualOutput = stringify_1.default.replaceAll(input, '', '');
                expect(actualOutput).toEqual(expectedOutput);
            });
        });
    });
    describe('Stringify.removeWhitespace', () => {
        it('should remove leading/trailing spaces and replace consecutive spaces with a single space', () => {
            const input = '  hello   world  ';
            const expectedOutput = 'hello world';
            const actualOutput = stringify_1.default.removeWhitespace(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should handle an empty input string', () => {
            const input = '';
            const expectedOutput = '';
            const actualOutput = stringify_1.default.removeWhitespace(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should handle a string with no whitespace', () => {
            const input = 'helloworld';
            const expectedOutput = 'helloworld';
            const actualOutput = stringify_1.default.removeWhitespace(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should handle a string with only whitespace', () => {
            const input = '    ';
            const expectedOutput = '';
            const actualOutput = stringify_1.default.removeWhitespace(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe("Stringify.reverse", () => {
        it('should reverse a string', () => {
            const input = 'hello world';
            const expectedOutput = 'dlrow olleh';
            const actualOutput = stringify_1.default.reverse(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should reverse an empty string', () => {
            const input = '';
            const expectedOutput = '';
            const actualOutput = stringify_1.default.reverse(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should reverse a string with one character', () => {
            const input = 'a';
            const expectedOutput = 'a';
            const actualOutput = stringify_1.default.reverse(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Stringify.reverseWords', () => {
        it('should reverse the order of words in a string with three words', () => {
            const input = 'hello world goodbye';
            const expectedOutput = 'goodbye world hello';
            const actualOutput = stringify_1.default.reverseWords(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should reverse the order of words in a string with two words', () => {
            const input = 'hello world';
            const expectedOutput = 'world hello';
            const actualOutput = stringify_1.default.reverseWords(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should reverse the order of words in a string with one word', () => {
            const input = 'hello';
            const expectedOutput = 'hello';
            const actualOutput = stringify_1.default.reverseWords(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
        it('should return an empty string when given an empty string', () => {
            const input = '';
            const expectedOutput = '';
            const actualOutput = stringify_1.default.reverseWords(input);
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
    describe('Stringify.shuffle', () => {
        it('returns a shuffled string with same length', () => {
            const input = 'hello world';
            const output = stringify_1.default.shuffle(input);
            expect(output.length).toEqual(input.length);
            expect(output).not.toEqual(input);
        });
        it('returns a shuffled string with same characters', () => {
            const input = 'hello world';
            const output = stringify_1.default.shuffle(input);
            const inputChars = input.split('').sort().join('');
            const outputChars = output.split('').sort().join('');
            expect(outputChars).toEqual(inputChars);
        });
    });
    describe("Stringify.contains", () => {
        it("returns true if the string contains the substring", () => {
            const input = "Hello, world!";
            const result = stringify_1.default.contains(input, ",");
            expect(result).toBe(true);
        });
        it("returns false if the string does not contain the substring", () => {
            const input = "Hello, world!";
            const result = stringify_1.default.contains(input, "123");
            expect(result).toBe(false);
        });
    });
    describe("Stringify.countOccurrences", () => {
        it("should return the correct number of occurrences when substring appears multiple times", () => {
            const input = "hello world";
            const count = stringify_1.default.countOccurrences(input, "l");
            expect(count).toBe(3);
        });
        it("should return 0 when substring does not appear in string", () => {
            const input = "hello world";
            const count = stringify_1.default.countOccurrences(input, "z");
            expect(count).toBe(0);
        });
    });
    describe('Stringify.slugify', () => {
        it('should return a URL-friendly slugified string', () => {
            expect(stringify_1.default.slugify('Hello World')).toBe('hello-world');
            expect(stringify_1.default.slugify('Test slugify function')).toBe('test-slugify-function');
            expect(stringify_1.default.slugify('Testing123')).toBe('testing123');
            expect(stringify_1.default.slugify('  Testing Spaces  ')).toBe('testing-spaces');
            expect(stringify_1.default.slugify('Testing_Underscores')).toBe('testing-underscores');
            expect(stringify_1.default.slugify('Testing+Special-Characters!')).toBe('testing-special-characters');
            expect(stringify_1.default.slugify('Testing Leading and Trailing Hyphens - ')).toBe('testing-leading-and-trailing-hyphens');
            expect(stringify_1.default.slugify('  Testing Leading and Trailing Spaces  ')).toBe('testing-leading-and-trailing-spaces');
        });
    });
    describe('jsonToXml and xmlToJson', () => {
        describe('jsonToXml()', () => {
            it('should correctly convert JSON to XML', () => {
                const jsonData = '{"name": "John Smith", "age": 30, "cars": ["Ford", "BMW", "Fiat"], "address": {"street": "123 Main St", "city": "Anytown", "state": "CA"}}';
                const expectedXml = '<root><name>John Smith</name><age>30</age><cars><car>Ford</car><car>BMW</car><car>Fiat</car></cars><address><street>123 Main St</street><city>Anytown</city><state>CA</state></address></root>';
                expect(stringify_1.default.jsonToXml(jsonData)).toEqual(expectedXml);
            });
        });
        describe('xmlToJson()', () => {
            it('should correctly convert XML to JSON', () => {
                const xmlData = '<root><name>John Smith</name><age>30</age><cars><car>Ford</car><car>BMW</car><car>Fiat</car></cars><address><street>123 Main St</street><city>Anytown</city><state>CA</state></address></root>';
                const expectedJson = {
                    name: 'John Smith',
                    age: '30',
                    cars: { car: ['Ford', 'BMW', 'Fiat'] },
                    address: { street: '123 Main St', city: 'Anytown', state: 'CA' },
                };
                expect(stringify_1.default.xmlToJson(xmlData)).toEqual(expectedJson);
            });
        });
    });
});
//# sourceMappingURL=Stringify.test.js.map