"use client";

import { findInterests } from "@/server/find-interest";
import { SavedInterestType } from "@/types";
import { useEffect, useState } from "react";
import SavedInterest from "./saved-interest";
import NoResults from "@/components/no-results";

const SavedInterests = () => {
    const [interests, setInterests] = useState<SavedInterestType[] | null>(null);

    useEffect(() => {
        const getInterests = async () => {
            const fetchedInterests = await findInterests();
            if (fetchedInterests !== null) setInterests(fetchedInterests);
        }
        getInterests();
    }, [])
    return ( 
        <div className="mt-10 size-full flex items-center justify-center flex-col gap-y-14 mb-10 lg:mb-20">
            {
                (interests && interests.length !== 0) ?
                interests.map((interest) => (
                    <SavedInterest 
                    key={interest.id}
                    id={interest.id}
                    internshipId={interest.internshipId}
                    />
                )) :
                <NoResults text={'Καμία Αποθηκευμένη Θέση'} />
            }
        </div>
    );
}
 
export default SavedInterests;