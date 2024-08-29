import Hero from "@/components/hero";
import { heroProfileAddInternship } from "@/data";
import { findUserBySession } from "@/server/find-user"
import { redirect } from "next/navigation";

export default async function AddInternshipPage() {
    
    const user = await findUserBySession();
    if (user?.type === 'UNDERGRADUATE') redirect('/profile');

    heroProfileAddInternship.title = user?.name ?? heroProfileAddInternship.title;
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileAddInternship} />
        </main>
    )
}