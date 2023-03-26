import Stringify from '../stringify';

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

  // describe('toEncryptedString and toDecryptedString', () => {
  //     test('encrypts and decrypts a string', () => {
  //         const plaintext = 'my secret message';
  //         const encrypted = Stringify.toEncryptedString(plaintext);
  //         const decrypted = Stringify.toDecryptedString(encrypted);
  //         expect(decrypted).toEqual(plaintext);
  //     });
  //
  //     test('throws an error when passed an invalid encrypted string', () => {
  //         const encrypted = 'not a valid encrypted string';
  //         expect(() => Stringify.toDecryptedString(encrypted)).toThrow();
  //     });
  // });

  // describe('toDecryptedJSON', () => {
  //     test('decrypts an encrypted JSON string to a JSON object', () => {
  //         const encrypted = Stringify.toEncryptedString({ name: 'John', age: 30, city: 'New York' });
  //         const jsonObject = Stringify.toDecryptedJSON(encrypted);
  //         expect(jsonObject).toEqual({ name: 'John', age: 30, city: 'New York' });
  //     });
  // });

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

  describe('toTitleCase()', () => {
    it('should convert a string to title case', () => {
      const result = Stringify.toTitleCase('example sentence');
      expect(result).toBe('Example Sentence');
    });
  });

  describe('toUpperCase()', () => {
    it('should convert a string to uppercase', () => {
      const result = Stringify.toUpperCase('example sentence');
      expect(result).toBe('EXAMPLE SENTENCE');
    });
  });

  describe('toLowerCase()', () => {
    it('should convert a string to lowercase', () => {
      const result = Stringify.toLowerCase('Example Sentence');
      expect(result).toBe('example sentence');
    });
  });

  describe('encodeQueryString()', () => {
    it('should encode an object into a query string', () => {
      const result = Stringify.encodeQueryString({
        param1: 'value1',
        param2: 'value2',
      });
      expect(result).toBe('param1=value1&param2=value2');
    });
  });

  describe('decodeQueryString()', () => {
    it('should decode a query string into an object', () => {
      const result = Stringify.decodeQueryString('param1=value1&param2=value2');
      expect(result).toEqual({
        param1: 'value1',
        param2: 'value2',
      });
    });
  });

  describe('parseUrl()', () => {
    it('should parse a URL into an object', () => {
      const result = Stringify.parseUrl('http://example.com/?param1=value1&param2=value2');
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
      const result = Stringify.formatString('Hello, ${name}!', { name: 'John' });
      expect(result).toBe('Hello, John!');
    });
  });

  describe('padLeft()', () => {
    it('should pad the left side of a string with a padding character until it reaches the given length', () => {
      const result = Stringify.padLeft('abc', 5, '_');
      expect(result).toBe('__abc');
    });

    it('should pad the left side of a string with spaces by default', () => {
      const result = Stringify.padLeft('abc', 4);
      expect(result).toBe(' abc');
    });
  });

  describe('padRight()', () => {
    it('should pad the right side of a string with a padding character until it reaches the given length', () => {
      const result = Stringify.padRight('abc', 4, '_');
      expect(result).toBe('abc_');
    });

    it('should pad the right side of a string with spaces by default', () => {
      const result = Stringify.padRight('abc', 4);
      expect(result).toBe('abc ');
    });
  });

  describe('jsonToXml and xmlToJson', () => {
    describe('jsonToXml()', () => {
      it('should correctly convert JSON to XML', () => {
        const jsonData =
          '{"name": "John Smith", "age": 30, "cars": ["Ford", "BMW", "Fiat"], "address": {"street": "123 Main St", "city": "Anytown", "state": "CA"}}';
        const expectedXml =
          '<root><name>John Smith</name><age>30</age><cars><car>Ford</car><car>BMW</car><car>Fiat</car></cars><address><street>123 Main St</street><city>Anytown</city><state>CA</state></address></root>';
        expect(Stringify.jsonToXml(jsonData)).toEqual(expectedXml);
      });
    });

    describe('xmlToJson()', () => {
      it('should correctly convert XML to JSON', () => {
        const xmlData =
          '<root><name>John Smith</name><age>30</age><cars><car>Ford</car><car>BMW</car><car>Fiat</car></cars><address><street>123 Main St</street><city>Anytown</city><state>CA</state></address></root>';
        const expectedJson = {
          name: 'John Smith',
          age: '30',
          cars: { car: ['Ford', 'BMW', 'Fiat'] },
          address: { street: '123 Main St', city: 'Anytown', state: 'CA' },
        };
        expect(Stringify.xmlToJson(xmlData)).toEqual(expectedJson);
      });
    });
  });
});
