"use server";

import { db } from "@/lib/db";
import { SearchFormSchema } from "@/schemas";
import { z } from "zod";

export const findInternships = async (values: z.infer<typeof SearchFormSchema> | []) => {
    try {
        // Check for result in case an empty array is passed
        const { success, data } = SearchFormSchema.safeParse(values);

        // Or field is an empty string
        if (!success || !data.field) {
            return [];
        }

        const { field, duration, employment, espa } = data;

        // If all, return all internships,
        // If all espa, return all with espa true
        // If all no espa, return all with espa false
        // Else handle the field and the rest fields
        const query = (() => {
            switch (field) {
                case 'all':
                    return {};
                case 'all espa':
                    return { espa: true };
                case 'all no espa':
                    return { espa: false };
                default:
                    return {
                        field,
                        ...(duration && { duration }),
                        ...(employment && { employment }),
                        espa
                    };
            }
        })();

        // Get internships based on the query
        const internships = await db.internship.findMany({
            where: query,
            include: {
                company: true
            }
        });

        return internships;
    } 
    catch (error) {
        console.error("Error finding internships:", error);
        return [];
    }
};
