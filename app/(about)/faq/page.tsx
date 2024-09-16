import Hero from "@/components/hero";
import { heroFaq } from "@/data";
import Options from "../_components/options";

export default function FaqPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroFaq} />
            <Options />
        </main>
    )
}