"use client";

import { useEffect, useState } from "react";
import { useInternshipStore } from "./use-internship-store";
import { InternshipType } from "@/types";
import { findInternships } from "@/server/find-internship";

const useFindInternships = (page: string) => {
    const data = useInternshipStore((state) => state.data);
    const [internships, setInternships] = useState<InternshipType[] | []>([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getInternships = async () => {
            const fetchedInternships = await findInternships(data, page);
            setInternships(fetchedInternships.internships);
            setTotalPages(fetchedInternships.totalPages);
        }
        getInternships();
    }, [data, page])

    return { internships, totalPages };
}
 
export default useFindInternships;