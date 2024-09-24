"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ViewUndergraduatesCta = ({
    undergraduateId,
    internshipId
}: {
    undergraduateId: string | null,
    internshipId: string
}) => {
    
    const router = useRouter();

    const handleClick = () => {
        router.push(`/profile/view-internships/${internshipId}`);
    }

    return ( 
        <div className="w-full h-36 flex items-center justify-center">
            {
                !undergraduateId &&
                <Button onClick={handleClick}>
                    Προβολή υποψηφίων
                </Button>
            }
            
        </div>
    );
}
 
export default ViewUndergraduatesCta;