import Hero from "@/components/hero";
import { heroProfileAddInterest } from "@/data";
import { findUserBySession } from "@/server/find-user"
import { redirect } from "next/navigation";
import SavedInterests from "../../_components/saved-interests";

export default async function AddInterestPage() {
    
    const user = await findUserBySession();
    if (user?.type === 'COMPANY') redirect('/profile');

    heroProfileAddInterest.title = user?.name ?? heroProfileAddInterest.title
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileAddInterest} />
            <SavedInterests />
        </main>
    )
}