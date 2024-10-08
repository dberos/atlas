"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { useModeStore } from "@/hooks/use-mode-store";
import { insertInterest } from "@/server/insert-interest";
import { useLoginStore } from "@/hooks/use-login-store";
import { useToast } from "@/components/ui/use-toast";
import { usePathname, useSearchParams } from "next/navigation";
  

const CtaDesktop = ({id}: { id: string }) => {

    const { user } = useAuth();

    const { toast } = useToast();

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const isAllowed = useModeStore((state) => state.isAllowed);

    const setIsOpen = useLoginStore((state) => state.setIsOpen);
    const setRedirectUrl = useLoginStore((state) => state.setRedirectUrl);

    const handleClick = async () => {
        if (user) {
            if (user.type === 'COMPANY') {
                toast({
                    title: "Αυτή η ενέργεια είναι μόνο για φοιτητές"
                })
            }
            else {
                const inserted = await insertInterest(id);
                if (!inserted) {
                    toast({
                        title: "Έχετε ήδη υποβάλει ενδιαφέρον για αυτή την πρακτική"
                    })
                }
                else {
                    toast({
                        title: "Η πρακτική αποθηκεύτηκε στο προφίλ για επεξεργασία"
                    })
                }
            }
        }
        else {
            const search = searchParams.toString();
            const fullPath = search ? `${pathname}?${search}` : pathname;
            setRedirectUrl(fullPath);
            setIsOpen(true);
        }
    }

    return ( 
        <div className="w-full h-36 flex items-center justify-center">
            {
                !isAllowed ? 
                <Skeleton className="h-12 w-40" /> :
                <Button onClick={handleClick}>
                    Ενδιαφέρομαι
                </Button>
            }
            
        </div>
    );
}
 
export default CtaDesktop;