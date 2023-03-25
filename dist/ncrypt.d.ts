/// <reference types="node" />
declare class Ncrypt {
    buffer: Buffer;
    constructor(key: string);
    encrypt(plaintext: string): string;
    decrypt(ciphertext: string): string;
}
export default Ncrypt;
