import { SignJWT, jwtVerify, JWTPayload, decodeJwt } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

interface Payload extends JWTPayload {
  id: string;
  type: string;
}

// Creating JWTs

export const createJWT = async (id: string, type: string, expiresIn: string = '1h'): Promise<string> => {
  const expirationSeconds = parseExpiration(expiresIn);
  const exp = Math.floor(Date.now() / 1000) + expirationSeconds;

  const payload: Payload = { id, type, exp };

  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .sign(JWT_SECRET);

  return jwt;
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

export const verifyToken = async (token: string): Promise<Payload | null> => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: ['HS256'],
    });

    const { exp, ...payloadWithoutExp } = payload as Payload;
    return payloadWithoutExp;
  } catch (e) {
    return null;
  }
};

export const decodeToken = async (token: string): Promise<Payload | null> => {
  try {
    const decoded = await decodeJwt(token) as Payload;

    const { exp, ...payloadWithoutExp } = decoded as Payload;
    return payloadWithoutExp;
  } catch (e) {
    console.error('Failed to decode JWT:', e);
    return null;
  }
};