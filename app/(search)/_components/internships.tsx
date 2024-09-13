"use client";

import useFindInternships from "@/hooks/use-find-internships";
import Internship from "./internship";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import NoResults from "@/components/no-results";
import { useEffect, useState } from "react";

const Internships = ({page}: { page: string }) => {

    // Get internships results based on page number, and total number of pages
    const { internships, totalPages } = useFindInternships(page);
    const currentPage = parseInt(page, 10) || 1;

    const [openInternshipId, setOpenInternshipId] = useState<string | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpenChange = (id: string) => {
        window.requestAnimationFrame(() => setOpenInternshipId((prev) => prev === id ? null : id));
    }

    // Use a timeout because before opening another internship, it is set back to null
    // And a timeout less than the animation duration that is 500
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!openInternshipId) {
                window.requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'smooth' }));
            } 
            else {
                setScrollPosition(window.scrollY);
            }
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [openInternshipId]);

    return ( 
        <div className="size-full flex items-center justify-center flex-col gap-y-14 mb-10 lg:mb-20">
            {   internships.length === 0 ? 
                <NoResults text={'Κανένα αποτέλεσμα αναζήτησης'} /> : 
                internships.map((internship) => (
                    <Internship 
                    key={internship.id}
                    {...internship}
                    isOpen={internship.id === openInternshipId}
                    onToggle={() => handleOpenChange(internship.id)}
                    />
                ))
            }
            {   totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`/internships?page=${currentPage - 1}`} />
                        </PaginationItem>
                    )}
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink
                            href={`/internships?page=${pageNumber}`}
                            isActive={pageNumber === currentPage}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                        );
                    })}
                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationNext href={`/internships?page=${currentPage + 1}`} />
                        </PaginationItem>
                    )}
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    ); 
}
 
export default Internships;