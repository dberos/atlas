"use server";

import { createJWT, decodeToken } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export const refreshSession = async (request: NextRequest) => {
    const token = request.cookies.get('session')?.value;
    if (!token) return null;

    const decodedToken = await decodeToken(token);
    if (!decodedToken) return null;
  
    const res = NextResponse.next();

    // Create new JWT that lasts 10 seconds (for example)
    const newToken = await createJWT(decodedToken.id, decodedToken.type, '10s');

    // Set the new JWT in cookies
    res.cookies.set('session', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 90, // 90 days
      path: '/',
    });

    // Add the refreshed token to the authorization header
    res.headers.set('authorization', `Bearer ${newToken}`);

    return res;
};
