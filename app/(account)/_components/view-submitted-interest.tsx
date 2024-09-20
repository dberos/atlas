"use client";

import { Button } from "@/components/ui/button";
import { findSubmittedInterest } from "@/server/find-interest";
import { SubmitteddInterestType } from "@/types";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

const ViewSubmittedInterest = ({interestId}: { interestId: string }) => {
    const [interest, setInterest] = useState<SubmitteddInterestType | null>(null);

    useEffect(() => {
        const getInterest = async () => {
            const fetchedInterest = await findSubmittedInterest(interestId);
            if (fetchedInterest !== null) setInterest(fetchedInterest);
        }
        getInterest();
    }, [])

    const handleClick = () => {
        if (interest && interest.cv) {
            const cvBlob = new Blob([Uint8Array.from(atob(interest.cv), c => c.charCodeAt(0))], { type: 'application/pdf' });
            const url = URL.createObjectURL(cvBlob);
    
            // Open the PDF in a new tab
            const newTab = window.open(url, '_blank');
    
            // Monitor the new tab to detect when it closes
            const checkTabClosed = setInterval(() => {
                if (newTab?.closed) {
                    clearInterval(checkTabClosed);
                    // Delete the url
                    URL.revokeObjectURL(url);
                }
            }, 500);
        }
    };
    return ( 
        <div className="pt-10 pb-10 w-full md:w-5/6 md:m-auto flex flex-col items-center">
            <div className="h-2 w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
            <h3 className="mt-2 text-base text-center">
                Ενδιαφέρον
            </h3>
            <div className="space-y-8 w-5/6 lg:w-full xl:w-4/6">
                <div className="flex flex-col gap-y-2 w-full">
                    <h3 className="text-base">
                        Βιογραφικό
                    </h3>
                    <div className="h-10 px-4 py-2 border border-input rounded-md flex items-center">
                        <Button 
                        variant='ghost' 
                        size='sm' 
                        className="-ml-4" 
                        type="button"
                        onClick={handleClick}
                        >
                            Προβολή <FileText className="size-4 ml-2" />
                        </Button>
                        <p className="text-sm ml-4 w-60 lg:w-80 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                            {interest?.cvName ?? 'Δεν υπάρχει αρχείο για προβολή'}
                        </p>
                    </div>
                </div>
                <div className="w-full max-h-40 flex flex-col">
                    <h3 className="mt-2 text-base">
                        Περιγραφή
                    </h3>
                    <p className="mt-6 text-sm max-w-xs lg:max-w-md size-full overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                        {interest?.description ?? 'Δεν υπάρχει διαθέσιμη περιγραφή'}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default ViewSubmittedInterest;