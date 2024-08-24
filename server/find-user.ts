"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { hashPassword} from "@/lib/utils";
import { cookies } from 'next/headers'
import { UserSchema } from "@/schemas";
import { getCsrfToken } from "./token";
import { UserType } from "@/types";
import { createJWT, decodeToken, verifyToken } from "@/lib/session";

export const checkEmailExists = async (email: string) => {
  const existingUser = await db.user.findUnique({ where: { email } })
  return !!existingUser;
}

export const loginUser = async (values: z.infer<typeof UserSchema>) => {
  try {
    const parsedValues = UserSchema.parse(values);

    // Validate tokens
    const clientToken = parsedValues.token;
    const serverToken = await getCsrfToken();
    if (clientToken !== serverToken) throw new Error('Wrong token');

    // Find the user by email and include associated Undergraduate or Company
    const user = await db.user.findUnique({
      where: {
        email: parsedValues.email,
      },
      include: {
        undergraduate: true,
        company: true,
      },
    });

    if (!user) {
      return { error: "User not found." };
    }

    // Hash the input password with PBKDF2 and compare
    const hashedInputPassword = await hashPassword(parsedValues.password, user.salt);

    // Verify the password
    const isPasswordValid = hashedInputPassword === user.password;

    if (isPasswordValid) {
      const token = await createJWT(user.id, user.userType, '5m');
      cookies().set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
      return { 
        message: "User found!"
       };
    } 
    else {
      return { error: "Invalid password." };
    }
  } 
  catch (error) {
    console.error(error);
    return { error: "Failed to find user." };
  }
};

// For UI purposes

export const findUserBySession = async () => {
  try {
    const token = cookies().get('session')?.value;
    if (!token) return null;

    const decodedToken = await decodeToken(token);
    if (!decodedToken) return null;

    const user = await db.user.findUnique({
      where: {
        id: decodedToken.id
      }
    })
    if (!user) return null;
    
    const userObj: UserType = {
      id: user.id,
      email: user.email,
      type: user.userType
    }
    return userObj;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

// For authentication

export const authenticateUser = async () => {
  try {
    const token = cookies().get('session')?.value;
    if (!token) return null;

    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) return null;

    const user = await db.user.findUnique({
      where: {
        id: verifiedToken.id
      }
    })
    if (!user) return null;
    
    const userObj: UserType = {
      id: user.id,
      email: user.email,
      type: user.userType
    }
    return userObj;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export const logoutUser = () => {
  cookies()?.delete('session');
}
