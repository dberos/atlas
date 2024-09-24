import Hero from "@/components/hero";
import { heroProfileViewInternships } from "@/data";
import { authenticateUser } from "@/server/find-user"
import { redirect } from "next/navigation";
import SubmittedInternships from "../../_components/submitted-internships";

export default async function ViewInternshipsPage() {

    const user = await authenticateUser();
    if (user?.type === 'UNDERGRADUATE') redirect('/profile');

    heroProfileViewInternships.title = user?.name ?? heroProfileViewInternships.title;

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileViewInternships} />
            <SubmittedInternships />
        </main>
    )
}