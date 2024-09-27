"use client";

import { findSubmittedInterests } from "@/server/find-interest";
import { ProfileCtaEnum, SubmitteddInterestType } from "@/types";
import { useEffect, useRef, useState } from "react";
import NoResults from "@/components/no-results";
import Internship from "./internship";
import { CircleCheck, CircleDashed, CircleX } from "lucide-react";

const SubmittedInterests = () => {
    const [interests, setInterests] = useState<SubmitteddInterestType[] | null>(null);

    useEffect(() => {
        const getInterests = async () => {
            const fetchedInterests = await findSubmittedInterests();
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

    // Render the Status of the Interest
    const StatusSection = (status: string) => {
        const renderStatus = () => {
            switch (status) {
                case 'ACCEPTED':
                    return (
                        <>
                        <CircleCheck className="size-6 mr-2 text-green-600" />
                        <p className="text-base text-green-600">
                            Η αίτηση εγκρίθηκε
                        </p>
                        </>
                    )
                case 'REJECTED':
                    return (
                        <>
                        <CircleX className="size-6 mr-2 text-red-600" />
                        <p className="text-base text-red-600">
                            Η αίτηση απορρίφθηκε
                        </p>
                        </>
                    )
                default:
                    return (
                        <>
                        <CircleDashed className="size-6 mr-2 text-gray-600 animate-spin" />
                        <p className="text-base text-gray-600">
                            Αναμένεται απάντηση
                        </p>
                        </>
                    )
            }
        }
        
        return (
            <div className="flex w-full justify-center lg:justify-end py-2 px-6">
                {renderStatus()}
            </div>
        )
    }

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
                    ctaType={ProfileCtaEnum.VIEW_SUBMITTED_INTEREST}
                    StatusSection={StatusSection(interest.status)}
                    />
                )) :
                <NoResults text={'Καμία Καταχωρημένη Θέση'} />
            }
        </div>
    );
}
 
export default SubmittedInterests;