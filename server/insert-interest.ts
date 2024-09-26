"use server";

import { db } from "@/lib/db";
import { authenticateUser, findCompany, findUndergraduate } from "./find-user";
import { z } from "zod";
import { UpdateInterestFormSchema } from "@/schemas";
import { SubmitteddInterestType } from "@/types";

export const insertInterest = async (id: string) => {
    try {
        const user = await authenticateUser();
        if (!user) return false;

        const undergraduate = await findUndergraduate(user.id);
        if (!undergraduate) return false;

        const interest = await db.interest.findUnique({
            where: {
                undergraduateId_internshipId: {
                    undergraduateId: undergraduate?.undergraduateId ?? "",
                    internshipId: id
                }
            }
        });

        if (!interest) {
            await db.interest.create({
                data: {
                    undergraduateId: undergraduate?.undergraduateId ?? "",
                    internshipId: id,
                    status: 'SAVED'
                },
            });
            return true
        }

        return false
    }
    catch (error) {
        console.error(error);
        return false
    }
}

export const updateInterest = async (values: z.infer<typeof UpdateInterestFormSchema>) => {
    try {
      const parsedValues = UpdateInterestFormSchema.parse(values);
  
      const user = await authenticateUser();
      if (!user) throw new Error('Error');
  
      const undergraduate = await findUndergraduate(user.id);
      if (!undergraduate) throw new Error('Error');
  
      const interest = await db.interest.findUnique({
        where: {
          id: parsedValues.interestId
        },
      });
  
      if (!interest) throw new Error('Error');
  
      // Convert base64 to Buffer
      const cvBuffer = parsedValues.cv ? Buffer.from(parsedValues.cv, 'base64') : undefined;
  
      // Update the interest and insert the given fields only
      await db.interest.update({
        where: {
          id: parsedValues.interestId
        },
        data: {
          status: "PENDING",
          ...(parsedValues.cvName && { cvName: parsedValues.cvName }),
          ...(cvBuffer && { cv: cvBuffer }),
          ...(parsedValues.description && { description: parsedValues.description }),
        },
      });
  
      return { message: 'Interest updated successfully' };
    } 
    catch (error) {
      console.error(error);
      return { error };
    }
};

export const rejectInterest = async (interestId: string) => {
  try {
    const user = await authenticateUser();
    if (!user) return null;

    const company = await findCompany(user.id);
    if (!company) return null;

    const interest = await db.interest.update({
      where: {
        id: interestId
      },
      data: {
        status: "REJECTED"
      },
      include: {
        undergraduate: true
      }
    });
    const interestObj: SubmitteddInterestType = {
      id: interest.id,
      internshipId: interest.internshipId,
      undergraduateId: interest.undergraduateId,
      undergraduate: interest.undergraduate,
      status: interest.status,
      cvName: interest.cvName ?? null,
      cv: interest.cv ? interest.cv.toString('base64') : null,
      description: interest.description ?? null
  };
    return interestObj ?? null;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

export const acceptInterest = async (interestId: string) => {
  try {
    const user = await authenticateUser();
    if (!user) return null;

    const company = await findCompany(user.id);
    if (!company) return null;

    const interest = await db.interest.update({
      where: {
        id: interestId
      },
      data: {
        status: 'ACCEPTED'
      }
    });
    if (!interest) return null;

    // Reject all the rest interests
    const rejectedInterests = await db.interest.updateMany({
      where: {
        internshipId: interest.internshipId,
        id: {
          not: interestId
        }
      },
      data: {
        status: 'REJECTED'
      }
    });
    if (!rejectedInterests) return null;

    // Update the internships table to exclude from all internships search this accepted internship
    const internship = await db.internship.update({
      where: {
        id: interest.internshipId
      },
      data: {
        undergraduateId: interest.undergraduateId
      }
    });
    return internship ?? null;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}