"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLoginStore } from "./use-login-store";
import { useEffect } from "react";
import { useAuth } from "./use-auth";

// Called at login form to possibly protect a route
const useHandleLogin = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const { isLoggedIn } = useAuth();

    // Redirect url is set from the component that doesn't allow redirection if not logged in
    const isOpen = useLoginStore((state) => state.isOpen);
    const redirectUrl = useLoginStore((state) => state.redirectUrl);
    const setRedirectUrl = useLoginStore((state) => state.setRedirectUrl)


    useEffect(() => {
        if (isOpen) {
            // If it opened to protect a route
            // Deny middleware redirect to /login 
            // Since its desktop and want to open dialog
            const search = searchParams.toString();
            const fullPath = search ? `${pathname}?${search}` : pathname;
            router.push(fullPath);
        }
        else {
            if (redirectUrl && isLoggedIn) {
                window.location.href = redirectUrl;
            }
            setRedirectUrl(null);
        }

    }, [isOpen, isLoggedIn])
}
 
export default useHandleLogin;