"use server"

import { db } from "@/lib/db"
import { AddInternshipFormSchema } from "@/schemas"
import { z } from "zod"
import { authenticateUser } from "./find-user"

export const insertInternship = async (values: z.infer<typeof AddInternshipFormSchema>) => {
    try {
        const parsedValues = AddInternshipFormSchema.parse(values);

        const user = await authenticateUser();
        if (!user) return null;

        const company = await db.company.findUnique({
            where: {
                userId: user.id
            }
        });
        if (!company) return null;

        const internship = await db.internship.create({
            data: {
                title: parsedValues.title,
                field: parsedValues.field,
                employment: parsedValues.employment,
                duration: parsedValues.duration,
                espa: parsedValues.espa,
                salary: parsedValues.salary,
                description: parsedValues.description,
                companyId: company.id
            }
        });
        if (!internship) throw new Error('Failed to create internship.')

        return { message: 'Internship created successfully!' };
    }
    catch (error) {
        console.error(error);
        return { error: 'Failed to create internship.' }
    }
}