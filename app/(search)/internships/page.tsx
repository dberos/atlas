import Filters from "../_components/filters";
import Hero from "../_components/hero";
import Internship from "../_components/internship";

export default function InternshipsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20 lg:p-24">
            <Hero />
            <Filters />
            <Internship />
        </main>
    )
}