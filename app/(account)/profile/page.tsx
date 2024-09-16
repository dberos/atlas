import Hero from "@/components/hero";
import { heroProfile } from "@/data";
import Options from "../_components/options";
import { findUserBySession } from "@/server/find-user";

export default async function ProfilePage() {

    // Check for authentication and redirect is done in middleware
    const user = await findUserBySession();

    heroProfile.title = user?.name ?? heroProfile.title;
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfile} />
            <Options />
        </main>
    )
}