"use client";

import useCloseModal from "@/hooks/use-close-modal";
import { cn } from "@/lib/utils";
import { InternshipType } from "@/types";
import { Building2, MapPin, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Internship = ({
    id,
    title,
    field,
    duration,
    employment,
    espa,
    salary,
    description,
    companyId,
    company
}: InternshipType) => {
    const [isOpen, setIsOpen] = useState(false);

    // Expandable div transitioning
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    // Closing internship when clicked outside
    const fragmentRef = useCloseModal(() => {
        if (isOpen) setIsOpen(false);
    });

    // Scroll to top of the expandable div when closing
    const topRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        if (isOpen) {
            // Save the current scroll position
            setScrollPosition(window.scrollY);
        } else {
            // Scroll back to the previous position when closing
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
    }, [isOpen, scrollPosition]);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;

    return ( 
        <div className="contents" ref={fragmentRef}>
            <div className="relative w-full lg:w-4/5 flex flex-col items-center justify-center">
                <div className={cn(
                    "w-full h-96 lg:h-72 items-center bg-slate-100 dark:bg-slate-900 z-10",
                    isOpen ? 'rounded-t-md' : 'rounded-md'
                )}
                ref={topRef}
                >
                    <div className="flex items-center justify-center mt-6">
                        <h2 className="text-lg lg:text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {title}
                        </h2>
                    </div>
                    <div className="lg:flex lg:flex-row lg:justify-around">
                        <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                            <Building2 className="size-6 text-orange-600"/>
                            <p className="text-base lg:text-lg">
                                {company.name}
                            </p>
                        </div>
                        <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                            <MapPin className="size-6 text-orange-600" />
                            <p className="text-base lg:text-lg">
                                {company.street} {company.streetNumber}, <br /> {company.district}, {company.city}
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
                                {field}
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
                                        {duration === 'full' ? '6 Μήνες' : '3 Μήνες'}
                                    </p>
                                </div>
                                <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                    <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                    <h3 className="mt-2 text-base text-center">
                                        Τύπος Απασχόλησης
                                    </h3>
                                    <p className="mt-6 text-sm text-center">
                                        {employment === 'full' ? 'Πλήρης Απασχόληση' : 'Περιορισμένη Απασχόληση'}
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
                                        {espa ? 'Χρηματοδότηση ΕΣΠΑ' : 'Χωρίς Χρηματοδότηση ΕΣΠΑ'}
                                    </p>
                                </div>
                                <div className="w-full lg:w-2/4 h-2/4 lg:h-full flex flex-col items-center">
                                    <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                                    <h3 className="mt-2 text-base text-center">
                                        Μισθός
                                    </h3>
                                    <p className="mt-6 text-sm text-center">
                                        {salary} &euro;
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Description */}
                        <div className="w-full md:w-5/6 lg:w-full xl:w-5/6 md:m-auto h-56 flex flex-col items-center">
                            <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                            <h3 className="mt-2 text-base text-center">
                                Περιγραφή Θέσης
                            </h3>
                            <p className="mt-6 text-sm text-center max-w-md">
                                {description}
                            </p>
                        </div>
                    </div>
                <div className="absolute bottom-4 right-4 cursor-pointer z-30" onClick={() => setIsOpen(!isOpen)}>
                    <Maximize2 className="size-6 text-orange-600" />
                </div>
            </div>
        </div>
     );
}
 
export default Internship;