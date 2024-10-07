"use client";

import handleProtectRoute from "@/components/navbar/handle-protect-route";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useLoginStore } from "@/hooks/use-login-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PersonasDesktop = () => {
    const setIsOpen = useLoginStore((state) => state.setIsOpen);
    const setRedirectUrl = useLoginStore((state) => state.setRedirectUrl);

    const { user } = useAuth();

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true) ,[]);
    if (!isMounted) return null;

    return ( 
        <div className="mt-20 w-full flex flex-col">
            <div className="lg:flex lg:gap-x-4">
                <div className="w-full h-96 lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="h-2 w-full md:w-5/6 xl:w-4/6 bg-gradient-to-r 
                    from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800 
                    lg:from-orange-300 lg:via-orange-200 lg:to-slate-300 lg:dark:from-orange-500 lg:dark:via-orange-300 lg:dark:to-slate-800" />
                    <div className="flex items-center justify-center w-full h-10">
                        <Link
                        href='/profile/add-internship'
                        className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer"
                        onClick={() => {
                            handleProtectRoute({
                                redirectUrl: '/profile/add-internship',
                                user,
                                setIsOpen,
                                setRedirectUrl,
                                callback: () => {}
                            })
                        }}
                        >
                            Προσθήκη Πρακτικής Άσκησης
                        </Link>
                    </div>
                    <div className="flex items-center justify-center w-full h-20">
                        <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                            Στο εταιρικό προφίλ, προσφέρεται η δημοσίευση νέας θέσης
                        </p>
                    </div>
                    <div className="w-full h-48 lg:h-44 xl:h-48 flex items-center justify-center">
                        <Link
                        href='/profile/add-internship'
                        className="contents"
                        onClick={() => {
                            handleProtectRoute({
                                redirectUrl: '/profile/add-internship',
                                user,
                                setIsOpen,
                                setRedirectUrl,
                                callback: () => {}
                            })
                        }}
                        >
                            <Image 
                            src="/home-personas-left.svg"
                            alt="person uploading a file"
                            width={100}
                            height={100}
                            className="size-4/6 object-contain xl:cursor-pointer xl:hover:scale-105 xl:transition xl:ease-in-out"
                            />
                        </Link>
                    </div>
                </div>
                <div className="w-full h-96 lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="h-2 w-full md:w-5/6 xl:w-4/6 bg-gradient-to-r 
                    from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800
                    lg:from-slate-300 lg:via-orange-200 lg:to-orange-300 lg:dark:from-slate-800 lg:dark:via-orange-300 lg:dark:to-orange-500" />
                    <div className="flex items-center justify-center w-full h-10">
                        <Link
                        href='/profile/view-internships'
                        className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer"
                        onClick={() => {
                            handleProtectRoute({
                                redirectUrl: '/profile/view-internships',
                                user,
                                setIsOpen,
                                setRedirectUrl,
                                callback: () => {}
                            })
                        }}
                        >
                            Αξιολόγηση Ενδιαφέροντος
                        </Link>
                    </div>
                    <div className="flex items-center justify-center w-full h-20">
                        <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                            Επιπλέον, δίνεται η δυνατότητα γνωριμίας με τους υποψηφίους της θέσης
                        </p>
                    </div>
                    <div className="w-full h-48 lg:h-44 xl:h-48 flex items-center justify-center">
                        <Link
                        href='/profile/view-internships'
                        className="contents"
                        onClick={() => {
                            handleProtectRoute({
                                redirectUrl: '/profile/view-internships',
                                user,
                                setIsOpen,
                                setRedirectUrl,
                                callback: () => {}
                            })
                        }}
                        >
                            <Image 
                            src="/home-personas-right.svg"
                            alt="person searching"
                            width={100}
                            height={100}
                            className="size-4/6 object-contain xl:cursor-pointer xl:hover:scale-105 xl:transition xl:ease-in-out"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-80">
                <div className="h-2 w-full md:w-5/6 lg:w-3/6 xl:w-2/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center">
                    Γραφείο Πρακτικής Πανεπιστημίου
                </h3>
                <p className="mt-5 max-w-md text-center text-sm lg:text-base 2xl:text-md">
                    Διαχειριστείτε όλες τις ενδιάμεσες διαδικασίες του τμήματός σας μέσω του προσωπικού σας λογαριασμού στον ΑΤΛΑΣ.
                </p>
                <Button size="lg" className="p-4 mt-10">
                    <Link
                    href='/faq'
                    >
                        Μάθετε περισσότερα
                    </Link>
                </Button>
            </div>
        </div>
    );
}
 
export default PersonasDesktop;