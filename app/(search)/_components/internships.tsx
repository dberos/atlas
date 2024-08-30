"use client";

import useFindInternships from "@/hooks/use-find-internships";
import Internship from "./internship";
import InternshipsEmpty from "./internships-empty";

const Internships = () => {
    const { internships } = useFindInternships();
    return ( 
        <div className="size-full flex items-center justify-center flex-col gap-y-10">
            {   internships.length === 0 ? 
                <InternshipsEmpty /> : 
                internships.map((internship) => (
                    <Internship 
                    key={internship.id}
                    {...internship}
                    />
                ))
            }
        </div>
    ); 
}
 
export default Internships;