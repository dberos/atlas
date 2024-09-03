"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { useInternshipStore } from "@/hooks/use-internship-store";
import { useModeStore } from "@/hooks/use-mode-store";
import { insertInterest } from "@/server/find-interest";
import { setFieldCookie } from "@/server/search";
import { SearchCookieType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CtaMobile = ({id}: { id: string }) => {

    // Map fields from store to form values
    const FIELDS = {
        ALL: 'Όλοι οι Τομείς',
        ALL_ESPA: 'Πρακτικές μέσω ΕΣΠΑ',
        ALL_NO_ESPA: 'Πρακτικές χωρίς ΕΣΠΑ'
    };

    const mapFieldName = (field: string): string => {
        switch (field) {
            case "all espa":
                return FIELDS.ALL_ESPA;
            case "all no espa":
                return FIELDS.ALL_NO_ESPA;
            case "all":
                return FIELDS.ALL;
            default:
                return field;
        }
    };
    
    const isAllowed = useModeStore((state) => state.isAllowed);

    const { user } = useAuth();

    const { toast } = useToast();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const data = useInternshipStore((state) => state.data);

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
            const newField = mapFieldName(data.field ?? "");
            const dataSearch: SearchCookieType = {
                field: newField,
                duration: data.duration,
                employment: data.employment,
                espa: data.espa
            }
            await setFieldCookie(JSON.stringify(dataSearch));
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