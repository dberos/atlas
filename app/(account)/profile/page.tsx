import Hero from "@/components/hero";
import { heroProfile } from "@/data";
import Options from "../_components/options";
import { authenticateUser } from "@/server/find-user";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    // Check for authentication
    const user = await authenticateUser();
    if (!user) redirect('/');

    heroProfile.title = user?.name ?? heroProfile.title;
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfile} />
            <Options />
        </main>
    )
}