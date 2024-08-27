"use client";

import Hero from "@/components/hero";
import { heroProfile } from "@/data";
import { useAuth } from "@/hooks/use-auth";
import Options from "../_components/options";

export default function ProfilePage() {
    const { user } = useAuth();
    heroProfile.title = user?.name ?? heroProfile.title;
    return (
        <main className="flex min-h-screen flex-col items-center p-8 md:p-20 lg:p-24">
            <Hero {...heroProfile} />
            <Options />
        </main>
    )
}