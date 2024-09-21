import Hero from "@/components/hero";
import { heroProfileViewInterests } from "@/data";
import { authenticateUser } from "@/server/find-user"
import { redirect } from "next/navigation";
import SubmittedInterests from "../../_components/submitted-interests";

export default async function ViewInterestsPage() {

    const user = await authenticateUser();
    if (user?.type === 'COMPANY') redirect('/');
    
    heroProfileViewInterests.title = user?.name ?? heroProfileViewInterests.title
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileViewInterests} />
            <SubmittedInterests />
        </main>
    )
}