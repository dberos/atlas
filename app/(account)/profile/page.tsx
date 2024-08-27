"use client";

import Hero from "@/components/hero";
import { heroProfile } from "@/data";
import { useAuth } from "@/hooks/use-auth";

export default function ProfilePage() {
    const { user } = useAuth();
    heroProfile.title = user?.name ?? heroProfile.title;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20 lg:p-24">
            <Hero {...heroProfile} />
        </main>
    )
}