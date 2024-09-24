"use client";

import { Button } from "@/components/ui/button";
import { findSubmittedInterest } from "@/server/find-interest";
import { SubmitteddInterestType } from "@/types";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { acceptInterest, rejectInterest } from "@/server/insert-interest";

const ViewUndergraduate = ({interestId}: { interestId: string }) => {

    const router = useRouter();

    const { toast } = useToast();

    const [interest, setInterest] = useState<SubmitteddInterestType | null>(null);

    useEffect(() => {
        const getInterest = async () => {
            const fetchedInterest = await findSubmittedInterest(interestId);
            if (fetchedInterest !== null) setInterest(fetchedInterest);
        }
        getInterest();
    }, [])

    const handleViewCv = () => {
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

    const handleReject = async () => {
        const interest = await rejectInterest(interestId);
        if (interest) {
            toast({
                title: "Η αίτηση απορρίφθηκε"
            });
            router.replace('/profile/view-internships');
        }
        else {
            toast({
                title: "Προέκυψε σφάλμα"
            });
        }
    }

    const handleAccept = async () => {
        const internship = await acceptInterest(interestId);
        if (internship) {
            toast({
                title: "Η αίτηση εγκρίθηκε"
            });
            router.replace('/profile/view-internships');
        }
        else {
            toast({
                title: "Προέκυψε σφάλμα"
            });
        }
    }

    return ( 
        interest &&
        <div className="w-full md:w-5/6 lg:w-1/3 h-[430px] flex flex-col items-center border border-solid rounded-md">
            <div className="rounded-md h-2 w-full bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
            <div className="w-full h-14 flex items-center justify-center">
                <h3 className="text-center font-medium text-xl">
                    {interest.undergraduate.name} {interest.undergraduate.surname}
                </h3>
            </div>
            <div className="w-full h-72 flex justify-center mt-4">
                <div className="space-y-8 w-full p-4">
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
                            onClick={handleViewCv}
                            >
                                Προβολή <FileText className="size-4 ml-2" />
                            </Button>
                            <p className="text-sm ml-4 w-60 lg:w-80 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                                {interest?.cvName ?? 'Δεν υπάρχει αρχείο για προβολή'}
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-40 flex flex-col">
                        <h3 className="mt-2 text-base">
                            Περιγραφή
                        </h3>
                        <p className="mt-6 text-sm max-w-xs lg:max-w-md size-full overflow-y-scroll [&::-webkit-scrollbar]:hidden 
                        bg-slate-100 dark:bg-slate-900 rounded-md p-2"
                        >
                            {interest?.description ?? 'Δεν υπάρχει διαθέσιμη περιγραφή'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-x-4 mt-2">
                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='secondary'>
                        Απόρριψη
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>
                        Είστε σίγουροι;
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Πρόκειται να απορρίψετε τον υποψήφιο για την Πρακτική Άσκηση
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>
                        Ακύρωση
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button onClick={handleReject}>
                            Απόρριψη
                        </Button>
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>
                        Αποδοχή
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>
                        Είστε σίγουροι;
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Πρόκειται να επιλέξετε τον υποψήφιο για την Πρακτική Άσκηση
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>
                        Ακύρωση
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button onClick={handleAccept}>
                            Αποδοχή
                        </Button>
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
            </div>
            
        </div>
    );
}
 
export default ViewUndergraduate;