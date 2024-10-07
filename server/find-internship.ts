"use server";

import { db } from "@/lib/db";
import { SearchFormSchema } from "@/schemas";
import { z } from "zod";
import { authenticateUser, findCompany } from "./find-user";

// For search
export const findInternships = async (
    values: z.infer<typeof SearchFormSchema> | [],
    page: string
) => {
    try {
        // Check for result in case an empty array is passed
        const { success, data } = SearchFormSchema.safeParse(values);

        // Or field is an empty string
        if (!success || !data.field) {
            return { internships: [], totalPages: 0 };
        }

        const { field, duration, employment, city, espa } = data;

        // Number of internships per page
        const pageSize = 5;
        // Current page number
        const pageNumber = parseInt(page, 10) || 1;
        // Starting position of the query
        const offset = (pageNumber - 1) * pageSize;

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
            where: {
                ...query, 
                ...(city && { company: { city } }),
                undergraduateId: null
            },
            include: {
                company: true
            },
            skip: offset,
            take: pageSize
        });

        // Get the count of internships
        const totalInternships = await db.internship.count({
            where: {
                ...query,
                undergraduateId: null
            }
        });
        // Get the total pages count
        const totalPages = Math.ceil(totalInternships / pageSize);

        return { internships, totalPages };
    } 
    catch (error) {
        console.error("Error finding internships:", error);
        return { internships: [], totalPages: 0 };
    }
};

export const findInternship = async (id: string) => {
    try {
        const internship = await db.internship.findUnique({
            where: {
                id
            },
            include: {
                company: true
            }
        });
        return internship;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

// For company's internships
export const findInternshipsByCompany = async () => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const company = await findCompany(user.id);
        if (!company) return null;

        const internships = await db.internship.findMany({
            where: {
                companyId: company.companyId
            },
            include: {
                company: true
            }
        });
        if (!internships) return null;

        return internships;
    }
    catch (error) {
        console.error(error);
    }
}

export const findInternshipByCompany = async (id: string) => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const company = await findCompany(user.id);
        if (!company) return null;

        const internship = await db.internship.findUnique({
            where: {
                id
            }
        });
        return internship?.companyId !== company.companyId ? null : internship;
    }
    catch (error) {
        console.error(error);
    }
}
