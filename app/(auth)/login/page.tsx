import { authenticateUser } from "@/server/find-user";
import Hero from "./_components/hero";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function LoginPage() {

    const user = await authenticateUser();
    if (user) redirect('/');

    return (
        <Suspense>
            <main className="flex flex-col min-h-[90vh] items-center justify-between p-8 lg:p-24">
                <Hero />
            </main>
        </Suspense>
    )
}