import Hero from "@/components/hero";
import { heroFaqUndergraduates } from "@/data";
import FaqUndergraduates from "../../_components/faq-undergraduates";

export default function FaqUndergraduatesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroFaqUndergraduates} />
            <FaqUndergraduates />
        </main>
    )
}