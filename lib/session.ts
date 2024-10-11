import { SignJWT, jwtVerify, JWTPayload, decodeJwt, compactVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

interface Payload extends JWTPayload {
  id: string,
  type: string,
  exp: number
}

// Creating JWTs

export const createJWT = async (id: string, type: string, expiresIn: string = '1h') => {
  const expirationSeconds = parseExpiration(expiresIn);
  const exp = Math.floor(Date.now() / 1000) + expirationSeconds;

  const payload: Payload = { id, type, exp };

  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .sign(JWT_SECRET);

  return jwt;
};

const parseExpiration = (expiresIn: string) => {
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

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: ['HS256'],
    });

    return payload as Payload;
  } 
  catch (error) {
    console.error('Failed to verify JWT:', error);
    return null;
  }
};

export const decodeToken = async (token: string) => {
  try {
    // Verify the signature without the claims
    // If it fails it throws an error
    await compactVerify(token, JWT_SECRET);

    const decoded = await decodeJwt(token) as Payload;

    return decoded;
  } 
  catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
};