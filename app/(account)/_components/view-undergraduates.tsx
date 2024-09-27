"use client";

import { findInterestsByInternshipId } from "@/server/find-interest";
import { SubmitteddInterestType } from "@/types";
import { useEffect, useState } from "react";
import ViewUndergraduate from "./view-undergraduate";
import NoResults from "@/components/no-results";

const ViewUndergraduates = ({internshipId}: { internshipId: string }) => {
    const [interests, setInterests] = useState<SubmitteddInterestType[] | null>(null);

    useEffect(() => {
        const getInterests = async () => {
            const fetchedInterests = await findInterestsByInternshipId(internshipId);
            if (fetchedInterests !== null) setInterests(fetchedInterests);
        }
        getInterests();
    }, [internshipId])
    return ( 
        <div className="lg:mt-20 pb-10 w-full 2xl:w-5/6 flex flex-wrap items-center justify-center
        flex-col lg:flex-row gap-y-8 lg:gap-y-20 lg:gap-x-20 2xl:px-20"
        >
            {
                (interests && interests.length !==0) ?
                interests.map((interest) => (
                    <ViewUndergraduate 
                    key={interest.id}
                    interestId={interest.id}
                    />
                )) :
                <NoResults text={'Κανένας υποψήφιος'} />
            }
        </div>
    );
}
 
export default ViewUndergraduates;