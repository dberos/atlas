import { authenticateUser } from "@/server/find-user";
import Hero from "./_components/hero";
import { redirect } from "next/navigation";

export default async function RegisterPage() {

    const user = await authenticateUser();
    if (user) redirect('/');

    return (
        <main className="flex min-h-[90vh] flex-col items-center justify-between p-8 lg:p-24">
            <Hero />
        </main>
    )
}