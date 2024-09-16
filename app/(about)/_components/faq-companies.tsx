"use client";

import { faqCompanies } from "@/data";
import { useEffect, useState } from "react";
import Faq from "./faq";

const FaqCompanies = () => {
    const [openFaqId, setopenFaqId] = useState<string | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpenChange = (id: string) => {
        window.requestAnimationFrame(() => setopenFaqId((prev) => prev === id ? null : id));
    }

    // Use a timeout because before opening another internship, it is set back to null
    // And a timeout less than the animation duration that is 500
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!openFaqId) {
                window.requestAnimationFrame(() => window.scrollTo({ top: scrollPosition, behavior: 'smooth' }));
            } 
            else {
                setScrollPosition(window.scrollY);
            }
        }, 300);
    
        return () => clearTimeout(timeoutId);
    }, [openFaqId]);
    return ( 
        <div className="mt-10 size-full flex items-center justify-center flex-col gap-y-6 mb-10 lg:mb-20 2xl:px-20">
            {
                faqCompanies.map((faq) => (
                    <Faq
                    key={faq.id}
                    {...faq}
                    isOpen={faq.id.toString() === openFaqId}
                    onToggle={() => handleOpenChange(faq.id.toString())}
                    />
                ))
            }
        </div>
    );
}
 
export default FaqCompanies;