"use client";

import { findSavedInterests } from "@/server/find-interest";
import { ProfileCtaEnum, SavedInterestType } from "@/types";
import { useEffect, useRef, useState } from "react";
import NoResults from "@/components/no-results";
import Internship from "./internship";

const SavedInterests = () => {
    const [interests, setInterests] = useState<SavedInterestType[] | null>(null);

    useEffect(() => {
        const getInterests = async () => {
            const fetchedInterests = await findSavedInterests();
            if (fetchedInterests !== null) setInterests(fetchedInterests);
        }
        getInterests();
    }, [])

    const [openInterestId, setOpenInterestId] = useState<string | null>(null);
    const scrollPositionRef = useRef(0);

    const handleOpenChange = (id: string) => {
        window.requestAnimationFrame(() => setOpenInterestId((prev) => prev === id ? null : id));
    }

    // Use a timeout because before opening another internship, it is set back to null
    // And a timeout less than the animation duration that is 500
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!openInterestId) {
                window.requestAnimationFrame(() => window.scrollTo({ top: scrollPositionRef.current, behavior: 'smooth' }));
            } 
            else {
                scrollPositionRef.current = window.scrollY;
            }
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [openInterestId]);

    return ( 
        <div className="mt-10 size-full flex items-center justify-center flex-col gap-y-14 mb-10 lg:mb-20 2xl:px-20">
            {
                (interests && interests.length !== 0) ?
                interests.map((interest) => (
                    <Internship 
                    key={interest.id}
                    internshipId={interest.internshipId}
                    interestId={interest.id}
                    isOpen={interest.id === openInterestId}
                    onToggle={() => handleOpenChange(interest.id)}
                    ctaType={ProfileCtaEnum.SAVED_INTEREST_FORM}
                    />
                )) :
                <NoResults text={'Καμία Αποθηκευμένη Θέση'} />
            }
        </div>
    );
}
 
export default SavedInterests;