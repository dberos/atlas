"use client";

import { useEffect, useState } from "react";
import { useMedia, useWindowScroll } from 'react-use';
import { cn } from "@/lib/utils";
import NavMobile from "./nav-mobile";
import NavDesktop from "./nav-desktop";
import NavLogo from "./nav-logo";

const NavBar = () => {
    const isMobile = useMedia("(max-width: 1024px)", false);
    const { y } = useWindowScroll();

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true));
    if (!isMounted) return null;

    return ( 
        <nav className={cn(
            "h-20 w-full p-8 flex items-center justify-between fixed bg-inherit z-50",
            y > 20 && "shadow-md dark:shadow-slate-900"
        )}>
            <div className="flex items-center justify-center">
                <NavLogo />
            </div>
            
            { isMobile ? <NavMobile /> : <NavDesktop /> }
        </nav>
     );
}
 
export default NavBar;