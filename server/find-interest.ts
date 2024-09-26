"use server";

import { db } from "@/lib/db";
import { authenticateUser, findCompany, findUndergraduate } from "./find-user";
import { SubmitteddInterestType } from "@/types";

export const findSavedInterests = async () => {
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

export const findSubmittedInterests = async () => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const interests = await db.interest.findMany({
            where: {
                status: {
                    not: 'SAVED'
                }
            },
            include: {
                undergraduate: true
            }
        });
        if (!interests) return null;

        const interestsObj: SubmitteddInterestType[] = interests.map((interest) => ({
            id: interest.id,
            internshipId: interest.internshipId,
            undergraduateId: interest.undergraduateId,
            undergraduate: interest.undergraduate,
            status: interest.status,
            cvName: interest.cvName ?? null,
            cv: interest.cv ? interest.cv.toString('base64') : null,
            description: interest.description ?? null
        }));
        return interestsObj;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const findSubmittedInterest = async (id: string) => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const interest = await db.interest.findUnique({
            where: {
                id
            },
            include: {
                undergraduate: true
            }
        });
        if (!interest) return null;

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
        return interestObj;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const findInterestsByInternshipId = async (internshipId: string) => {
    try {
        const user = await authenticateUser();
        if (!user) return null;

        const company = await findCompany(user.id);
        if (!company) return null;

        const interests = await db.interest.findMany({
            where: {
                internshipId: internshipId,
                status: 'PENDING'
            },
            include: {
                undergraduate: true
            }
        });
        const interestsObj: SubmitteddInterestType[] = interests.map((interest) => ({
            id: interest.id,
            internshipId: interest.internshipId,
            undergraduateId: interest.undergraduateId,
            undergraduate: interest.undergraduate,
            status: interest.status,
            cvName: interest.cvName ?? null,
            cv: interest.cv ? interest.cv.toString('base64') : null,
            description: interest.description ?? null,
        }));
        return interestsObj ?? null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}