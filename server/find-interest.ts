"use server";

import { db } from "@/lib/db";
import { authenticateUser, findUndergraduate } from "./find-user";

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