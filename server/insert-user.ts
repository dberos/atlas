"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { hashPassword, generateSalt } from "@/lib/utils";
import { checkEmailExists } from "./find-user";
import { CompanyFormSchema, UndergraduateFormSchema } from "@/schemas";
import { getCsrfToken } from "./token";


export const registerUndergraduate = async (values: z.infer<typeof UndergraduateFormSchema>) => {
  try {
    // Validate the input values
    const parsedValues = UndergraduateFormSchema.parse(values);

    // Validate tokens
    const clientToken = parsedValues.token;
    const serverToken = await getCsrfToken();
    if (clientToken !== serverToken) throw new Error('Wrong token');

    // Check if email already exists
    const emailExists = await checkEmailExists(parsedValues.email);
    if (emailExists) {
      return { error: "Αυτό το email υπάρχει ήδη στο σύστημα" };
    }

    // Generate a salt and hash the password
    const salt = generateSalt();
    const hashedPassword = await hashPassword(parsedValues.password, salt) as string;

    // Insert user into the database with salt and hashed password
    const newUser = await db.user.create({
      data: {
        email: parsedValues.email,
        password: hashedPassword,
        salt: salt,
        userType: parsedValues.userType,
      },
    });

    // Create Undergraduate entry
    const undergraduate = await db.undergraduate.create({
      data: {
        name: parsedValues.name,
        surname: parsedValues.surname,
        university: parsedValues.university,
        department: parsedValues.department,
        userId: newUser.id,
      },
    });

    // Update User record with the undergraduateId
    await db.user.update({
      where: { id: newUser.id },
      data: { undergraduateId: undergraduate.id },
    });

    return { message: "Undergraduate registered successfully!" };
  } 
  catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { error: error.errors };
    }
    return { error: "Failed to register undergraduate." };
  }
};

export const registerCompany = async (values: z.infer<typeof CompanyFormSchema>) => {
  try {
    // Validate the input values
    const parsedValues = CompanyFormSchema.parse(values);

    // Validate tokens
    const clientToken = parsedValues.token;
    const serverToken = await getCsrfToken();
    if (clientToken !== serverToken) throw new Error('Wrong token');

    // Check if email already exists
    const emailExists = await checkEmailExists(parsedValues.email);
    if (emailExists) {
      return { error: "Αυτό το email υπάρχει ήδη στο σύστημα" };
    }

    // Generate a salt and hash the password
    const salt = generateSalt();
    const hashedPassword = await hashPassword(parsedValues.password, salt) as string;

    // Insert user into the database with salt and hashed password
    const newUser = await db.user.create({
      data: {
        email: parsedValues.email,
        password: hashedPassword,
        salt: salt,
        userType: parsedValues.userType,
      },
    });

    // Create Company entry
    const company = await db.company.create({
      data: {
        name: parsedValues.name,
        city: parsedValues.city,
        district: parsedValues.district,
        street: parsedValues.street,
        streetNumber: parsedValues.streetNumber,
        userId: newUser.id,
      },
    });

    // Update User record with the companyId
    await db.user.update({
      where: { id: newUser.id },
      data: { companyId: company.id },
    });

    return { message: "Company registered successfully!" };
  } 
  catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { error: error.errors };
    }
    return { error: "Failed to register company." };
  }
};
