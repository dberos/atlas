"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/use-auth";
import { logoutUser } from "@/server/find-user";
import { ThemeToggle } from "../theme-toggle";
import Login from "../login/login";
import Register from "../register/register";

const NavDesktop = () => {
    const [isOpenUndergraduates, setIsOpenUndergraduates] = useState(false);
    const [isOpenCompanies, setIsOpenCompanies] = useState(false);
    const [isOpenUniversites, setIsOpenUniversities] = useState(false);
    const { user, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        logoutUser();
        window.localStorage.clear();
        setIsLoggedIn(false);
    }
    return ( 
        <div className="flex size-full items-center justify-between ml-4">
            <div className="flex items-center justify-center ml-10 gap-x-6">
            <DropdownMenu open={isOpenUndergraduates} onOpenChange={setIsOpenUndergraduates} modal={false}>
                <DropdownMenuTrigger className="flex gap-x-2 items-center">
                    <>
                    Φοιτητές
                    { isOpenUndergraduates ? <ChevronUp className="size-4"/> : <ChevronDown className="size-4"/> }
                    </>
                </DropdownMenuTrigger>
                <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} className="p-2">
                    <DropdownMenuItem>
                        <Link href="/">
                            Αναζήτηση Θέσης
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/">
                            Συχνές Ερωτήσεις
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={isOpenCompanies} onOpenChange={setIsOpenCompanies} modal={false}>
                <DropdownMenuTrigger className="flex gap-x-2 items-center">
                    <>
                    Εταιρείες
                    { isOpenCompanies ? <ChevronUp className="size-4"/> : <ChevronDown className="size-4"/> }
                    </>
                </DropdownMenuTrigger>
                <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} className="p-2">
                    <DropdownMenuItem>
                        <Link href="/">
                            Προσθήκη Θέσης
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/">
                            Συχνές Ερωτήσεις
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={isOpenUniversites} onOpenChange={setIsOpenUniversities} modal={false}>
                <DropdownMenuTrigger className="flex gap-x-2 items-center">
                    <>
                    Πανεπιστήμια
                    { isOpenUniversites ? <ChevronUp className="size-4"/> : <ChevronDown className="size-4"/> }
                    </>
                </DropdownMenuTrigger>
                <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} className="p-2">
                    <DropdownMenuItem>
                        Διαχείριση
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Συχνές Ερωτήσεις
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>
                Επικοινωνία
            </p>
            </div>
            <div className="flex items-center justify-center gap-x-4">
                <ThemeToggle />
                {
                    user ? 
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col items-center">
                            <DropdownMenuItem>
                                Προφίλ
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                Αποσύνδεση
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> :
                    <div className="flex items-center justify-center gap-x-2">
                        <Login />
                        <Register />
                    </div> 
                }
            </div>
        </div>
     );
}
 
export default NavDesktop;