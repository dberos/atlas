"use client";

import { cn } from "@/lib/utils";
import { Building2, MapPin, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Internship = () => {
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

    // Scroll to top of the expandable div when closing
    const topRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen && topRef.current) {
            // Scroll the topRef into view smoothly
            topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [isOpen]);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;

    return ( 
        <div className="relative w-full lg:w-4/5 flex flex-col items-center justify-center">
             <div className={cn(
                "w-full h-96 lg:h-72 items-center bg-slate-100 dark:bg-slate-900 z-10",
                isOpen ? 'rounded-t-md' : 'rounded-md'
             )}
             ref={topRef}
             >
                <div className="flex items-center justify-center mt-6">
                    <h2 className="text-lg lg:text-2xl">
                        Web Developer
                    </h2>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-around">
                    <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                        <Building2 className="size-6 text-orange-600"/>
                        <p className="text-base lg:text-lg">
                            Εταιρεία 1
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-14 gap-y-4 text-center">
                        <MapPin className="size-6 text-orange-600" />
                        <p className="text-base lg:text-lg">
                            Εθνικής Αντιστάσεως 1, <br /> Καισαριανή, Αθήνα
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
                    <div className="h-[600px]" />
                </div>
            <div className="absolute bottom-4 right-4 cursor-pointer z-30" onClick={() => setIsOpen(!isOpen)}>
                <Maximize2 className="size-6 text-orange-600" />
            </div>
        </div>
       
     );
}
 
export default Internship;