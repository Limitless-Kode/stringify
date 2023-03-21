import Stringify from "./stringify";

// const encrypter = new Stringify();
//
// const encrypted = encrypter.encrypt('This a sample text that could be scrambled and encrypted anyhow');
// console.log({encrypted});
//
// const decrypted = encrypter.decrypt(encrypted);
// console.log({decrypted})

const s: string = Stringify.toEncryptedString({
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
    }
) as string;
console.log(s)
console.log(Stringify.toLowerCase('JamesIsAnInterestingPerson'))