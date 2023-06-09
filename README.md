# Stringify

[![NPM version](https://img.shields.io/npm/v/@limitless.claver/stringify.svg?style=flat-square)](https://www.npmjs.com/package/@limitless.claver/stringify)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/limitless-kode/stringify/publish.yml)
![GitHub issues](https://img.shields.io/github/issues/limitless-kode/stringify)
![GitHub top language](https://img.shields.io/github/languages/top/limitless-kode/stringify)
![npm](https://img.shields.io/npm/dw/@limitless.claver/stringify)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![LICENSE](https://img.shields.io/github/license/limitless-kode/stringify.svg)](LICENSE)

Stringify provides a set of methods for working with JSON strings and objects, case conversion, as well as encryption and decryption capabilities. It extends the Ncrypt class for encryption and decryption, and also allows you to convert JSON strings to JSON objects, and vice versa.

In this library, you'll find a variety of string conversion methods such as converting strings to camel case, snake case, kebab case, and sentence case. You can also encrypt and decrypt strings using the encryption key provided or via the .env file.

This documentation provides an overview of the Stringify class, including its methods, parameters, return types, and examples of how to use them. Whether you're working on a small or large project, Stringify aims to provide an easy-to-use set of tools that can help you with common string manipulation tasks.
q
## Installation

To use Stringify, you need to have Node.js installed on your computer. Once you have Node.js installed, you can install the package using the following command in your terminal:

```
npm install @limitless.claver/stringify
```

### Create a `.env` file

Add a `32 character` length encryption key to the created `.env` file. You can ignore this step if you do not intend to use the encryption methods of this library.

```
//.env
ENCRYPTION_KEY=6bef904c684547d18f15a47e09ecdbb3
```

## Usage

### Encryption and Decryption Methods

### `toEncryptedString(value: any): string`

Encrypts a string using the encryption key.

#### Example

```jsx
const plaintext = 'my secret message';
const encrypted = Stringify.toEncryptedString(plaintext);
console.log(encrypted); // Encrypted string
```

#### Parameters

- `value`: The string to encrypt.

#### Returns

- The encrypted string.

### `toDecryptedString(value: string): string`

Decrypts an encrypted string to plain text using the encryption key.

#### Example

```jsx
const encrypted = 'Encrypted string';
const plaintext = Stringify.toDecryptedString(encrypted);
console.log(plaintext); // 'my secret message'
```

#### Parameters

- `value`: The encrypted string.

#### Returns

- The decrypted string.

### `toDecryptedJSON(value: string): any`

Decrypts an encrypted string to a JSON object using the encryption key.

#### Example

```jsx
const encrypted = 'Encrypted JSON string';
const jsonObject = Stringify.toDecryptedJSON(encrypted);
console.log(jsonObject); // Decrypted JSON object
```

#### Parameters

- `value`: The encrypted JSON string.

#### Returns

- The decrypted JSON object.

### String Formatting Methods

### `formatString(template: string, values: Record<string, any>): string`

The `formatString` method replaces placeholders in a string template with values from an object.

#### Parameters

- `template` (required) - The string template with placeholders to replace.
- `values` (required) - The object containing the values to use for replacement.

#### Example

```jsx
const template = 'Hello, ${firstName} ${lastName}!';
const values = { firstName: 'John', lastName: 'Doe' };
const formattedString = Stringify.formatString(template, values);
console.log(formattedString);
// Output: "Hello, John Doe!"
```

### `padLeft(str: string, length: number, paddingChar: string = " "): string`

The `padLeft` method pads a string on the left with a specified character until it reaches the desired length.

#### Parameters

- `str` (required) - The string to pad.
- `length` (required) - The length to which the string should be padded.
- `paddingChar` (optional) - The character to use for padding. The default value is a space character.

#### Example

```jsx
const str = '123';
const paddedString = Stringify.padLeft(str, 5, '0');
console.log(paddedString);
// Output: "00123"
```

### `padRight(str: string, length: number, paddingChar: string = " "): string`

The `padRight` method pads a string on the right with a specified character until it reaches the desired length.

#### Parameters

- `str` (required) - The string to pad.
- `length` (required) - The length to which the string should be padded.
- `paddingChar` (optional) - The character to use for padding. The default value is a space character.

#### Example

```jsx
const str = '123';
const paddedString = Stringify.padRight(str, 5, '0');
console.log(paddedString);
// Output: "12300"
```

### `truncate(str: string, maxLength: number, suffix: string = "..."): string`

The `truncate` method truncates a string to a specified maximum length and appends a suffix to the end of the string.

#### Parameters

- `str` (required) - The string to truncate.
- `maxLength` (required) - The maximum length of the truncated string.
- `suffix` (optional) - The suffix to append to the end of the string if it is truncated. The default value is "...".

#### Example

```jsx
const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem';
const truncatedString = Stringify.truncate(str, 50);
console.log(truncatedString);
// Output: "Lorem ipsum dolor sit amet, consectetur adipisc..."

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem';
const truncatedString = Stringify.truncate(str, 50, "(continue)");
console.log(truncatedString);
// Output: "Lorem ipsum dolor sit amet, consectetur adipisc (continue)"
```

### String Case Conversion Methods

### `toTitleCase(str: string): string`

Converts the first letter of each word in a given string to uppercase and the remaining letters to lowercase.

#### Example

```jsx
Stringify.toTitleCase("example sentence"); // "Example Sentence"
```

#### Parameters

- `str`: The string to convert to title case.

#### Returns

- A string that has been converted to title case.

### `toUpperCase(str: string): string`

Converts all letters in a given string to uppercase.

#### Example

```jsx
Stringify.toUpperCase("example sentence"); // "EXAMPLE SENTENCE"
```

#### Parameters

- `str`: The string to convert to uppercase.

#### Returns

- A string that has been converted to uppercase.

### `toLowerCase(str: string): string`

Converts all letters in a given string to lowercase.

#### Example

```jsx
Stringify.toLowerCase("Example Sentence"); // "example sentence"
```

#### Parameters

- `str`: The string to convert to lowercase.

#### Returns

- A string that has been converted to lowercase.

### `replace(str: string, oldSubstring: string, newSubstring: string): string`

Replaces all occurrences of a substring with a new substring in a given string.

##### Parameters:

- `str`: The input string to be processed.
- `oldSubstring`: The substring to be replaced.
- `newSubstring`: The new substring to replace the old substring.

##### Returns:

A new string with all occurrences of the old substring replaced with the new substring.

##### Example:

```typescript
const input = "hello world";
const output = Stringify.replace(input, "world", "universe");
console.log(output); // "hello universe"
```



### `replaceAll(str: string, oldSubstring: string, newSubstring: string): string`

Replaces all occurrences of a substring with a new substring in a given string.

#### Parameters:

- `str`: The input string to be processed.
- `oldSubstring`: The substring to be replaced.
- `newSubstring`: The new substring to replace the old substring.

#### Returns:

A new string with all occurrences of the old substring replaced with the new substring.

#### Example:

```typescript
const input = "hello world";
const output = Stringify.replaceAll(input, "o", "x");
console.log(output); // "hellx wxrld"
```

### `removeWhitespace(value: string): string`

Removes leading/trailing spaces and replaces multiple consecutive spaces with a single space.

#### Parameters:

- `value`: The string to remove whitespace from.

#### Returns:

A new string with whitespace removed.

#### Example:

```typescript
const input = "   hello    world   ";
const output = Stringify.removeWhitespace(input);
console.log(output); // "hello world"
```

### `reverse(value: string): string`

Reverses the characters of a string.

#### Parameters:

- `value`: The input string to reverse.

#### Returns:

A new string with the characters reversed.

#### Example:

```typescript
const input = "hello world";
const output = Stringify.reverse(input);
console.log(output); // "dlrow olleh"
```

### `reverseWords(str: string): string`

Reverses the order of words in a string.

#### Parameters

- `str`: The input string to be processed.

#### Returns

A new string with the order of words reversed.

#### Example

```typescript
const input = "hello world";
const output = Stringify.reverseWords(input);
console.log(output); // "world hello"
```

### `shuffle(str: string): string`

Shuffles the characters of a string.

#### Parameters:

- `str`: The input string to be shuffled.

#### Returns:

A new string with the characters of the input string shuffled.

#### Example:

```typescript
const input = "hello world";
const output = Stringify.shuffle(input);
console.log(output); // Output will be different every time due to randomness
```

### `contains(str: string, substring: string): boolean`

Returns a boolean indicating whether the string contains a specified substring.

#### Parameters:

- `str`: The input string to search in.
- `substring`: The substring to search for.

#### Returns:

A boolean indicating whether the string contains the substring. `true` if the substring is found, `false` otherwise.

#### Example:

```typescript
const input = "Hello, world!";
const hasComma = Stringify.contains(input, ",");
console.log(hasComma); // true

const hasExclamation = Stringify.contains(input, "!");
console.log(hasExclamation); // true

const hasNumbers = Stringify.contains(input, "123");
console.log(hasNumbers); // false
```

### `countOccurrences(str: string, substring: string): number`

Returns the number of times a specified substring appears in the string.

#### Parameters:

- `str`: The input string to be searched.
- `substring`: The substring to count occurrences of.

#### Returns:

The number of times the substring appears in the string.

#### Example:

```typescript
const input = "hello world";
const count = Stringify.countOccurrences(input, "l");
console.log(count); // 3
```


### `slugify(str: string): string`

The `slugify()` function takes a string as input and returns a URL-friendly slug.

#### Parameters

- `str`: A string to convert to a slug.

#### Returns

The slugified string.

#### Example

```typescript
const str = "This is a string with spaces and special characters!";
const slug = slugify(str);
console.log(slug); // Output: "this-is-a-string-with-spaces-and-special-characters"
```









<br/>
<br/>

### URL Encoding Methods

### `encodeQueryString(params: Record<string, any>): string`

Encodes an object of key-value pairs as a URL query string.

#### Example

```jsx
Stringify.encodeQueryString({ foo: 'bar', baz: 'qux' }); // "foo=bar&baz=qux"
```

#### Parameters

- `params`: An object containing key-value pairs to be encoded.

#### Returns

- A string containing the encoded key-value pairs as a query string.

### `decodeQueryString(queryString: string): Record<string, any>`

Decodes a URL query string into an object of key-value pairs.

#### Example

```jsx
Stringify.decodeQueryString("foo=bar&baz=qux"); // { foo: 'bar', baz: 'qux' }
```

#### Parameters

- `queryString`: A string containing the encoded key-value pairs as a query string.

#### Returns

- An object containing the decoded key-value pairs.

### `parseUrl(url: string): Record<string, any>`

Parses a URL into an object containing its protocol, hostname, port, and pathname, as well as any query parameters.

#### Example

```jsx
Stringify.parseUrl("https://www.example.com/search?q=example");
// { protocol: 'https:', hostname: 'www.example.com', port: '', pathname: '/search', q: 'example' }
```

#### Parameters

- `url`: The URL to be parsed.

#### Returns

- An object containing the parsed URL properties.
  <br/>
  <br/>
  <br/>

### Data Type Conversions

### `xmlToJson(xml: string): string`

Converts XML string to valid JSON objects

#### Example

```jsx
Stringify.xmlToJson("<root><name>Claver</name></root>"); // "{name: 'Claver'}"
```

#### Parameters

- `xml`: The XML string to convert to JSON

#### Returns

- A JSON object converted frm the XML string 

<br />
<br />

### `jsonToXml(json: string): string`

Converts JSON objects to valid XML

#### Example

```jsx
Stringify.jsonToXml({"name": "Claver"}); // <name>Claver</name>
```

#### Parameters

- `xml`: The JSON object to convert to XML

#### Returns

- A JSON object converted frm the XML string


## Options

### 🔨 JSON Manipulation

- *`toJson`*: Converts a JSON string to a JSON Object
- *`toString`*: Converts a JSON object to a string using `JSON.stringify`

### 🔐 Encryption and Decryption

Before you can use these methods, please add a `.env` file with a `32 alpha numeric string` as an `ENCRYPTION_KEY`.

- *`toEncryptedString`:* Encrypts and returns an encrypted hash of any string passed to it.
- *`toDecryptedString`:* Decrypts the encrypted string and returns the original text.
- *`toDecryptedJSON`:* Decrypts an encrypted stringified JSON object and returns the original JSON object.

### 🅰️ Case Conversions

- *`toCamelCase`:* Converts a string to camel case.
- *`toSnakeCase`:* Converts a string to snake case.
- *`toKebabCase`:* Converts a string to kebab case.
- *`toSentenceCase`:* Converts a string to sentence case.
- *`toTitleCase`:* Converts a string to title case.
- *`toUpperCase`:* Converts a string to uppercase.
- *`toLowerCase`:* Converts a string to lowercase.

### 🔗 URL Encoding

- *`encodeQueryString`:* Encodes a query string.
- *`decodeQueryString`:* Decodes a query string.
- *`parseUrl`:* Parses a URL.

### ⛓️ String Formatting

- *`formatString`:* Formats a string with placeholders and values.
- *`padLeft`:* Pads a string with characters on the left.
- *`padRight`:* Pads a string with characters on the right.
- *`truncate`:* Truncates a string to a specified length.