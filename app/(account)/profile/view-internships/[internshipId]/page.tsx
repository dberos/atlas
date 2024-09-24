import ViewUndergraduates from "@/app/(account)/_components/view-undergraduates";
import Hero from "@/components/hero";
import { heroProfileViewInternship } from "@/data";
import { findInternshipByCompany } from "@/server/find-internship";
import { authenticateUser } from "@/server/find-user"
import { redirect } from "next/navigation";

export default async function InternshipIdPage({params}: { params: { internshipId: string } }) {

    const user = await authenticateUser();
    if (user?.type === 'UNDERGRADUATE') redirect('/profile');

    // Unauthenticated access to current internship
    const internship = await findInternshipByCompany(params.internshipId);
    if (!internship || internship?.undergraduateId) redirect('/profile');

    heroProfileViewInternship.title = user?.name ?? heroProfileViewInternship.title;

    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfileViewInternship} />
            <ViewUndergraduates internshipId={internship.id} />
        </main>
    )
}