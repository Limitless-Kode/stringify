import * as crypto from 'crypto';

class Ncrypt {
  buffer: Buffer;
  constructor(key: string) {
    if (key.length !== 32) {
      throw new Error('Invalid key length. Must be 32 characters.');
    }
    this.buffer = Buffer.from(key);
  }

  encrypt(plaintext: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', this.buffer, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return `${iv.toString('hex')}:${encrypted}`;
  }

  decrypt(ciphertext: string): string {
    const [ivString, encrypted] = ciphertext.split(':');
    const iv = Buffer.from(ivString, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.buffer, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

export default Ncrypt;
