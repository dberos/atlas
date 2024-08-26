"use server";

import { createJWT, decodeToken } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export const refreshSession = async (request: NextRequest) => {
    const token = request.cookies.get('session')?.value;
    if (!token) return null;

    const decodedToken = await decodeToken(token);
    if (!decodedToken) return null;
  
    const res = NextResponse.next();
  
    const newToken = await createJWT(decodedToken.id, decodedToken.type, '5m');
    res.cookies.set('session', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    return res;
}