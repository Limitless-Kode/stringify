import Stringify from "../stringify";

describe('Stringify', () => {
    describe('toJson', () => {
        test('converts a valid JSON string to a JSON object', () => {
            const jsonString = '{"name":"John","age":30,"city":"New York"}';
            const jsonObject = Stringify.toJson(jsonString);
            expect(jsonObject).toEqual({ name: 'John', age: 30, city: 'New York' });
        });

        test('throws an error when passed an invalid JSON string', () => {
            const jsonString = 'not a valid json string';
            expect(() => Stringify.toJson(jsonString)).toThrow();
        });
    });

    describe('toString', () => {
        test('converts a valid JSON object to a JSON string', () => {
            const jsonObject = { name: 'John', age: 30, city: 'New York' };
            const jsonString = Stringify.toString(jsonObject);
            expect(jsonString).toEqual('{"name":"John","age":30,"city":"New York"}');
        });
    });

    describe('toEncryptedString and toDecryptedString', () => {
        test('encrypts and decrypts a string', () => {
            const plaintext = 'my secret message';
            const encrypted = Stringify.toEncryptedString(plaintext);
            const decrypted = Stringify.toDecryptedString(encrypted);
            expect(decrypted).toEqual(plaintext);
        });

        test('throws an error when passed an invalid encrypted string', () => {
            const encrypted = 'not a valid encrypted string';
            expect(() => Stringify.toDecryptedString(encrypted)).toThrow();
        });
    });

    describe('toDecryptedJSON', () => {
        test('decrypts an encrypted JSON string to a JSON object', () => {
            const encrypted = Stringify.toEncryptedString({ name: 'John', age: 30, city: 'New York' });
            const jsonObject = Stringify.toDecryptedJSON(encrypted);
            expect(jsonObject).toEqual({ name: 'John', age: 30, city: 'New York' });
        });
    });

    describe('toCamelCase', () => {
        test('converts a string to camel case', () => {
            const sentence = 'example_sentence';
            const camelCase = Stringify.toCamelCase(sentence);
            expect(camelCase).toEqual('exampleSentence');
        });
    });

    describe('toSnakeCase', () => {
        test('converts a string to snake case', () => {
            const sentence = 'example-sentence';
            const snakeCase = Stringify.toSnakeCase(sentence);
            expect(snakeCase).toEqual('example_sentence');
        });
    });

    describe('toKebabCase', () => {
        test('converts a string to kebab case', () => {
            const sentence = 'example_sentence';
            const kebabCase = Stringify.toKebabCase(sentence);
            expect(kebabCase).toEqual('example-sentence');
        });
    });

    describe('toSentenceCase', () => {
        test('converts a string to sentence case', () => {
            const sentence = 'this is an example sentence.';
            const sentenceCase = Stringify.toSentenceCase(sentence);
            expect(sentenceCase).toEqual('This is an example sentence.');
        });
    });
});

