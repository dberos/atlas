"use client";

import useCloseModal from "@/hooks/use-close-modal";
import { cn } from "@/lib/utils";
import { findInternship } from "@/server/find-internship";
import { InternshipType } from "@/types";
import { Building2, MapPin, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SavedInterestForm from "./saved-interest-form";
import { Button } from "@/components/ui/button";

const SavedInterest = ({
    id,
    internshipId,
    isOpen,
    onToggle
}: {
    id: string,
    internshipId: string,
    isOpen: boolean,
    onToggle: () => void
}) => {

    const [internship, setInternship] = useState<InternshipType | null>(null);
    useEffect(() => {
        const getInternship = async () => {
            const fetchedInternship = await findInternship(internshipId);
            if (fetchedInternship !== null) setInternship(fetchedInternship);
        }
        getInternship();
    }, [])

    // Expandable div transitioning
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
    
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            // When the animation finishes, scroll into view
            timeoutId = setTimeout(() => {
                window.requestAnimationFrame(() => {
                    fragmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                });
            }, 500);
        } else {
            setMaxHeight("0px");
        }
    
        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    // Closing internship when clicked outside
    const fragmentRef = useCloseModal(() => {
        if (isOpen) {
            onToggle();
        }
    });

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;

    return ( 
        internship &&
        <div className="relative w-full lg:w-4/5 flex flex-col items-center justify-center scroll-mt-24"
        ref={fragmentRef}
        >
            <div className={cn(
                "w-full h-96 lg:h-72 items-center bg-slate-100 dark:bg-slate-900 z-10",
                isOpen ? 'rounded-t-md' : 'rounded-md'
            )}
            >
                <div className="flex items-center justify-center mt-6">
                    <Button
                    type="button"
                    size='lg'
                    variant='ghost'
                    className="text-lg lg:text-2xl"
                    onClick={onToggle}
                    >
                        {internship.title}
                    </Button>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-around">
                    <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                        <Building2 className="size-6 text-orange-600"/>
                        <p className="text-base lg:text-lg">
                            {internship.company.name}
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                        <MapPin className="size-6 text-orange-600" />
                        <p className="text-base lg:text-lg">
                            {internship.company.street} {internship.company.streetNumber}, <br /> {internship.company.district}, {internship.company.city}
                        </p>
                    </div>
                </div>
            </div>
                {/* If don't want to show top div add isOpen && -mt.. */}
                <div 
                style={{ maxHeight }}
                ref={contentRef}
                className={cn(
                    "w-full overflow-hidden bg-slate-100 dark:bg-slate-900 z-20 transition-all duration-500 ease-in-out",
                    isOpen ? 'rounded-b-md' : 'rounded-md'
                )}
                >
                    {/* Field */}
                    <div className="w-full md:w-5/6 lg:w-full xl:w-5/6 md:m-auto h-32 flex flex-col items-center">
                        <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                        <h3 className="mt-2 text-base text-center">
                            Τομέας
                        </h3>
                        <p className="mt-6 text-sm text-center">
                            {internship.field}
                        </p>
                    </div>
                    {/* Duration and Employment */}
                    <div className="w-full h-64 lg:h-32 flex flex-row items-center justify-center">
                        <div className="w-full md:w-5/6 h-full flex flex-col lg:flex-row lg:gap-x-6 xl:gap-x-0">
                            <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                <h3 className="mt-2 text-base text-center">
                                    Διάρκεια
                                </h3>
                                <p className="mt-6 text-sm text-center">
                                    {internship.duration === 'full' ? '6 Μήνες' : '3 Μήνες'}
                                </p>
                            </div>
                            <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                <h3 className="mt-2 text-base text-center">
                                    Τύπος Απασχόλησης
                                </h3>
                                <p className="mt-6 text-sm text-center">
                                    {internship.employment === 'full' ? 'Πλήρης Απασχόληση' : 'Περιορισμένη Απασχόληση'}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Payment and Salary */}
                    <div className="w-full h-64 lg:h-32 flex flex-row items-center justify-center">
                        <div className="w-full md:w-5/6 lg:w-4/6 h-full flex flex-col lg:flex-row lg:gap-x-6 xl:gap-x-0">
                            <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                <h3 className="mt-2 text-base text-center">
                                    Μισθοδοσία
                                </h3>
                                <p className="mt-6 text-sm text-center">
                                    {internship.espa ? 'Χρηματοδότηση ΕΣΠΑ' : 'Χωρίς Χρηματοδότηση ΕΣΠΑ'}
                                </p>
                            </div>
                            <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                <h3 className="mt-2 text-base text-center">
                                    Μισθός
                                </h3>
                                <p className="mt-6 text-sm text-center">
                                    {internship.salary} &euro;
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <div className="w-full md:w-5/6 lg:w-full xl:w-5/6 md:m-auto max-h-40 flex flex-col items-center">
                        <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                        <h3 className="mt-2 text-base text-center">
                            Περιγραφή Θέσης
                        </h3>
                        <p className="mt-6 text-sm text-center max-w-xs lg:max-w-md size-full overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                            {internship.description}
                        </p>
                    </div>
                    <SavedInterestForm interestId={id} internshipId={internshipId} />
                </div>
            <Button
            type="button"
            size='icon'
            variant='ghost'
            className="absolute bottom-4 right-4 cursor-pointer z-30"
            onClick={onToggle}
            >
                <Maximize2 className="size-6 text-orange-600" />
            </Button>
        </div>
    );
}
 
export default SavedInterest;