"use client";

import { useEffect, useState } from "react";
import { useInternshipStore } from "./use-internship-store";
import { InternshipType } from "@/types";
import { findInternships } from "@/server/find-internship";

const useFindInternships = () => {
    const data = useInternshipStore((state) => state.data);
    const [internships, setInternships] = useState<InternshipType[] | []>([]);

    useEffect(() => {
        const getInternships = async () => {
            const fetchedInternships = await findInternships(data);
            setInternships(fetchedInternships);
        }
        getInternships();
    }, [data])

    return { internships };
}
 
export default useFindInternships;