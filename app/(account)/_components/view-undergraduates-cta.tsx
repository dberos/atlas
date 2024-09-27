"use client";

import { Button } from "@/components/ui/button";
import { findUndergraduateByUndergraduateId } from "@/server/find-user";
import { UndergraduateInfoType } from "@/types";
import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ViewUndergraduatesCta = ({
    undergraduateId,
    internshipId
}: {
    undergraduateId: string | null,
    internshipId: string
}) => {

    const [undergraduate, setUndergraduate] = useState<UndergraduateInfoType | null>(null);

    useEffect(() => {
        const findUndergraduate = async () => {
            const fetchedUndergraduate = await findUndergraduateByUndergraduateId(undergraduateId ?? "");
            if (fetchedUndergraduate) setUndergraduate(fetchedUndergraduate);
        }
        findUndergraduate();
    }, [undergraduateId])
    
    const router = useRouter();

    const handleClick = () => {
        router.push(`/profile/view-internships/${internshipId}`);
    }

    return ( 
        <div className="w-full h-36 flex items-center justify-center">
            {
                !undergraduateId ?
                <Button onClick={handleClick}>
                    Προβολή υποψηφίων
                </Button> :
                <div className="w-full h-10 flex items-center justify-center">
                    <p className="text-green-600 flex items-center justify-center">
                        <CircleCheck className="size-6 text-green-600 mr-2" /> Έχει επιλεγεί:&nbsp;
                        <span className="text-xl">
                            {undergraduate && undergraduate.name} {undergraduate && undergraduate.surname}
                        </span>
                    </p>
                </div>
            }
            
        </div>
    );
}
 
export default ViewUndergraduatesCta;