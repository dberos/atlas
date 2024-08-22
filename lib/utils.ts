import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import crypto from "crypto"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Hashing the passwords

export const generateSalt = (): string => {
  return crypto.randomBytes(16).toString('hex');
};

export const hashPassword = (password: string, salt: string): Promise<string> => {
  const iterations = 10000;
  const keyLength = 64;     
  const digest = 'sha512';
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
      if (err) return reject(err);
      resolve(derivedKey.toString('hex'));
    });
  });
};

const JWT_SECRET = process.env.JWT_SECRET!;

interface Payload {
  id: string;
  type: string;
  exp?: number;
}

// Creating JWTs

export const createJWT = (id: string, type: string, expiresIn: string = '1h'): string => {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const payload: Payload = {
    id,
    type,
    exp: Math.floor(Date.now() / 1000) + parseExpiration(expiresIn),
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

const parseExpiration = (expiresIn: string): number => {
  const match = expiresIn.match(/^(\d+)([hmsd])$/);
  if (!match) throw new Error('Invalid expiration format');
  
  const value = parseInt(match[1], 10);
  const unit = match[2];

  switch (unit) {
    case 's': return value;
    case 'm': return value * 60;
    case 'h': return value * 60 * 60;
    case 'd': return value * 60 * 60 * 24;
    default: throw new Error('Invalid expiration unit');
  }
};

export const verifyToken = (token: string): Payload | null => {
  const [encodedHeader, encodedPayload, signature] = token.split('.');

  const expectedSignature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  if (expectedSignature !== signature) return null;

  const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString());

  if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;

  // Exclude `exp` from the returned payload object
  const { exp, ...payloadWithoutExp } = payload;
  
  return payloadWithoutExp;
};

// Encrypt and decrypt the JWTs

const algorithm = 'aes-256-ctr';
const JWT_ENCRYPTION_KEY = process.env.JWT_ENCRYPTION_KEY!
const encryptionKey = crypto.createHash('sha256').update(String(JWT_ENCRYPTION_KEY)).digest('base64').slice(0, 32);

export const encrypt = (text: string): string => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey, 'utf-8'), iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (hash: string): string => {
  const [ivHex, encryptedHex] = hash.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(encryptionKey, 'utf-8'), iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString();
};

// Generating CSRF tokens

export const generateCsrfToken = () => {
  return crypto.randomBytes(32).toString('hex');
}
