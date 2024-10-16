import Hero from "@/components/hero";
import { heroProfileAddInternship } from "@/data";
import { authenticateUser } from "@/server/find-user"
import { redirect } from "next/navigation";
import AddInternship from "../../_components/add-internship";

export default async function AddInternshipPage() {
    
    const user = await authenticateUser();
    if (user?.type === 'UNDERGRADUATE') redirect('/profile');

    heroProfileAddInternship.title = user?.name ?? heroProfileAddInternship.title;
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileAddInternship} />
            <AddInternship />
        </main>
    )
}