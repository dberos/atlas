"use client";

import { findInternshipsByCompany } from "@/server/find-internship";
import { InternshipType, ProfileCtaEnum } from "@/types";
import { CircleCheck, CircleDashed } from "lucide-react";
import { useEffect, useState } from "react";
import Internship from "./internship";
import NoResults from "@/components/no-results";

const SubmittedInternships = () => {
    const [internships, setInternships] = useState<InternshipType[] | null>(null);

    useEffect(() => {
        const getInternships = async () => {
            const fetchedInternships = await findInternshipsByCompany();
            if (fetchedInternships) setInternships(fetchedInternships);
        }
        getInternships();
    }, [])

    const [openInternshipId, setOpenInternshipId] = useState<string | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpenChange = (id: string) => {
        window.requestAnimationFrame(() => setOpenInternshipId((prev) => prev === id ? null : id));
    }

    // Use a timeout because before opening another internship, it is set back to null
    // And a timeout less than the animation duration that is 500
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!openInternshipId) {
                window.requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'smooth' }));
            } 
            else {
                setScrollPosition(window.scrollY);
            }
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [openInternshipId]);

    const StatusSection = (undergraduateId: string | null) => {
        const renderStatus = () => {
            if (undergraduateId) {
                return (
                    <>
                    <CircleCheck className="size-6 mr-2 text-green-600" />
                    <p className="text-base text-green-600">
                        Έχει επιλεγεί υποψήφιος
                    </p>
                    </>
                )
            }
            else {
                return (
                    <>
                    <CircleDashed className="size-6 mr-2 text-gray-600 animate-spin" />
                    <p className="text-base text-gray-600">
                        Αναμένεται επιλογή
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
                (internships && internships.length !==0) ?
                internships.map((internship) => (
                    <Internship 
                    key={internship.id}
                    internshipId={internship.id}
                    isOpen={internship.id === openInternshipId}
                    onToggle={() => handleOpenChange(internship.id)}
                    ctaType={ProfileCtaEnum.VIEW_UNDERGRADUATES}
                    StatusSection={StatusSection(internship.undergraduateId)}
                    />
                )) :
                <NoResults text={'Καμία Καταχωρημένη Θέση'} />
            }
        </div>
    );
}
 
export default SubmittedInternships;