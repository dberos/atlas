"use server";

import { db } from "@/lib/db";
import { authenticateUser, findUndergraduate } from "./find-user";

export const findInterests = async () => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const undergraduate = await findUndergraduate(user.id);
        if (!undergraduate) return null;

        const interests = await db.interest.findMany({
            where: {
                undergraduateId: undergraduate.undergraduateId,
                status: 'SAVED'
            }
        });
        return interests;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}