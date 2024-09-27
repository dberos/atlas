"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/use-auth";

const CookiesConsent = () => {

    const { isLoggedIn } = useAuth();

    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const handleClick = () => {
        window.localStorage.setItem('cookiesConsent', 'true');
        setIsVisible(false);
    }

    useEffect(() => {
        if (window.localStorage.getItem('cookiesConsent')) {
            setIsVisible(false);
        }
        if (!isLoggedIn && !window.localStorage.getItem('cookiesConsent')) {
            setIsVisible(true);
        }
    }, [isVisible, isLoggedIn])

    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;

    return ( 
        isVisible &&
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
            <div className="z-50 fixed bottom-0 h-60 lg:h-40 w-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
            <div className="px-8 lg:px-20 py-10 space-y-2">
                <p className="text-lg text-center">
                    Ο ιστοχώρος χρησιμοποιεί τα απαραίτητα cookies για την λειτουργία του
                </p>
                <div className="flex items-center justify-center">
                    <Button onClick={handleClick}>
                        Το κατάλαβα
                    </Button>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default CookiesConsent;