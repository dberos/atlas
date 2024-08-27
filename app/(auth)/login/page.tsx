import { findUserBySession } from "@/server/find-user";
import Hero from "./_components/hero";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const user = await findUserBySession();
    if (user) redirect('/');
    return (
        <main className="flex flex-col min-h-[90vh] items-center justify-between p-8 lg:p-24">
            <Hero />
        </main>
    )
}