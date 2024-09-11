"use server";

import { db } from "@/lib/db";
import { authenticateUser, findUndergraduate } from "./find-user";
import { z } from "zod";
import { UpdateInterestFormSchema } from "@/schemas";

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
      if (!user) throw new Error('User not authenticated');
  
      const undergraduate = await findUndergraduate(user.id);
      if (!undergraduate) throw new Error('Undergraduate not found');
  
      const interest = await db.interest.findUnique({
        where: {
          id: parsedValues.interestId
        },
      });
  
      if (!interest) throw new Error('Interest not found');
  
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

      // Convert buffer to base64 to send it back to frontend to view it
      const cvBase64 = cvBuffer ? cvBuffer.toString('base64') : undefined;
  
      return { message: 'Interest updated successfully', cvBase64 };
    } 
    catch (error) {
      console.error(error);
      return { error };
    }
  };