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

// Generating CSRF tokens

export const generateCsrfToken = () => {
  return crypto.randomBytes(32).toString('hex');
}
