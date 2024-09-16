import Hero from "@/components/hero";
import { heroFaqCompanies } from "@/data";
import FaqCompanies from "../../_components/faq-companies";

export default function FaqCompaniesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero  {...heroFaqCompanies} />
            <FaqCompanies />
        </main>
    )
}