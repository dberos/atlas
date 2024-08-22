"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true));
    if (!isMounted) return null;

    return ( 
        <nav className="h-20 w-full p-8 flex items-center justify-between fixed bg-inherit z-50">
            <div className="flex items-center justify-center">
                <Link href='/'>
                    <Image 
                    src='/logo.svg'
                    alt='logo'
                    priority
                    height={100}
                    width={100}
                    className="size-12 object-contain"
                    />
                </Link>
            </div>
            
        </nav>
     );
}
 
export default NavBar;