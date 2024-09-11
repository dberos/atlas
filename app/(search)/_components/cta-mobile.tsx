"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useModeStore } from "@/hooks/use-mode-store";
import { insertInterest } from "@/server/insert-interest";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CtaMobile = ({id}: { id: string }) => {
    
    const isAllowed = useModeStore((state) => state.isAllowed);

    const { user } = useAuth();

    const { toast } = useToast();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

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
            router.push(`/login?redirect=${encodeURIComponent(fullPath)}`);
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
 
export default CtaMobile;