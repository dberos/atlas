"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { hashPassword} from "@/lib/utils";
import { cookies, headers } from 'next/headers'
import { UserSchema } from "@/schemas";
import { getCsrfToken } from "./token";
import { CompanyInfoType, UndergraduateInfoType, UserType } from "@/types";
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
      // Create jwt that lasts 1 minute and cookie 90 days
      const token = await createJWT(user.id, user.userType, '1m');
      cookies().set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 90,
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
      },
      include: {
        undergraduate: true,
        company: true
      }
    });

    if (!user) return null;

    const userObj: UserType = {
      id: user.id,
      email: user.email,
      type: user.userType,
    };

    if (user.userType === 'UNDERGRADUATE' && user.undergraduate) {
      userObj.name  = user.undergraduate.name + " " + user.undergraduate.surname
    } 
    else if (user.userType === 'COMPANY' && user.company) {
      userObj.name = user.company.name
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
    // Get the token from the headers that was set during the request
    // Not the cookie
    const authorizationHeader = headers().get('authorization');
    let token;

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      token = authorizationHeader.split(' ')[1];
    }

    if (!token) return null;

    // Verify the token
    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) return null;

    // Verify the user exists
    const user = await db.user.findUnique({
      where: {
        id: verifiedToken.id
      },
      include: {
        undergraduate: true,
        company: true
      }
    });

    if (!user) return null;

    const userObj: UserType = {
      id: user.id,
      email: user.email,
      type: user.userType,
    };

    if (user.userType === 'UNDERGRADUATE' && user.undergraduate) {
      userObj.name  = user.undergraduate.name + " " + user.undergraduate.surname
    } 
    else if (user.userType === 'COMPANY' && user.company) {
      userObj.name = user.company.name
    }

    return userObj;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
};

// After authentication in the backend, find full undergraduate or company

export const findUndergraduate = async (userId: string) => {
  try {
    const undergraduate = await db.undergraduate.findUnique({
      where: {
        userId
      }
    });
    if (!undergraduate) return null;

    const undergraduateObj: UndergraduateInfoType = {
      undergraduateId: undergraduate.id,
      name: undergraduate.name,
      surname: undergraduate.surname,
      university: undergraduate.university,
      department: undergraduate.department
    }
    return undergraduateObj;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export const findCompany = async (userId: string) => {
  try {
    const company = await db.company.findUnique({
      where: {
        userId
      }
    });
    if (!company) return null;

    const companyObj: CompanyInfoType = {
      companyId: company.id,
      name: company.name,
      city: company.city,
      district: company.district,
      street: company.street,
      streetNumber: company.streetNumber
    }
    return companyObj;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export const logoutUser = async () => {
  cookies()?.delete('session');
}
