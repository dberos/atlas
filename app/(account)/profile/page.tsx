import Hero from "@/components/hero";
import { heroProfile } from "@/data";

export default function ProfilePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20 lg:p-24">
            <Hero {...heroProfile} />
        </main>
    )
}