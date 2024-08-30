import Hero from "@/components/hero";
import Filters from "../_components/filters";
import { heroInternships } from "@/data";
import Internships from "../_components/internships";

export default function InternshipsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20 lg:p-24">
            <Hero {...heroInternships} />
            <Filters />
            <Internships />
        </main>
    )
}