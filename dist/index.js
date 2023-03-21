"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringify_1 = __importDefault(require("./stringify"));
// const encrypter = new Stringify();
//
// const encrypted = encrypter.encrypt('This a sample text that could be scrambled and encrypted anyhow');
// console.log({encrypted});
//
// const decrypted = encrypter.decrypt(encrypted);
// console.log({decrypted})
const s = stringify_1.default.toEncryptedString({
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "555-555-5555"
        },
        {
            "type": "work",
            "number": "666-666-6666"
        }
    ],
    "familyMembers": [
        {
            "name": "Jane Doe",
            "relationship": "Spouse",
            "age": 28
        },
        {
            "name": "Johnny Doe",
            "relationship": "Child",
            "age": 5
        }
    ],
    "hobbies": [
        "Reading",
        "Hiking",
        "Cooking"
    ]
});
console.log(s);
console.log(stringify_1.default.toLowerCase('JamesIsAnInterestingPerson'));
