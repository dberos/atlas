"use server";

import { db } from "@/lib/db";
import { SearchFormSchema } from "@/schemas";
import { z } from "zod";

export const findInternships = async (values: z.infer<typeof SearchFormSchema> | []) => {
    try {
        // Parse the input values using the schema
        const result = SearchFormSchema.safeParse(values);
        if (result.success) {
            const parsedValues = result.data;
            let query: any = {};

            if (parsedValues.field === 'all') {
                // Return all internships
                query = {};
            } else if (parsedValues.field === 'all no espa') {
                // Return all internships with espa = true
                query = { espa: false };
            } else if (parsedValues.field === 'all espa') {
                // Return all internships with espa = false
                query = { espa: true };
            } else {
                // Return internships matching the given field and other given values
                query = {
                    field: parsedValues.field,
                    ...(parsedValues.duration !== '' && { duration: parsedValues.duration }),
                    ...(parsedValues.employment !== '' && { employment: parsedValues.employment }),
                    espa: parsedValues.espa, // Correctly assign the espa key
                };
            }

            const internships = await db.internship.findMany({
                where: query,
                include: {
                    company: true
                }
            });

            return internships;
        }
        else {
            return [];
        }

        
    } catch (error) {
        console.error("Error finding internships:", error);
        return [];
    }
};