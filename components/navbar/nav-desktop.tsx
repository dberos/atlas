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
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/hooks/use-login-store";
import handleProtectRoute from "./handle-protect-route";
import { useToast } from "../ui/use-toast";

const NavDesktop = () => {

    const router = useRouter();

    const { user, setIsLoggedIn } = useAuth();

    const { toast } = useToast();

    const [isOpenUndergraduates, setIsOpenUndergraduates] = useState(false);
    const [isOpenCompanies, setIsOpenCompanies] = useState(false);
    const [isOpenUniversites, setIsOpenUniversities] = useState(false);
    const [isOpenAccount, setIsOpenAccount] = useState(false);

    // Protect the route by opening dialog, and redirect after, in handleProtectRoute
    const setIsOpen = useLoginStore((state) => state.setIsOpen);
    const setRedirectUrl = useLoginStore((state) => state.setRedirectUrl);

    const handleLogout = async () => {
        try {
            await logoutUser();
            window.localStorage.clear();
            setIsLoggedIn(false);
            router.replace('/');
        }
        catch (error) {
            toast({
                title: "Προέκυψε σφάλμα"
            })
        }
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
                        <Link href="/faq/undergraduates" onClick={() => setIsOpenUndergraduates(false)}>
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
                    <DropdownMenuItem 
                    onClick={() => {
                        handleProtectRoute({
                            redirectUrl: '/profile/add-internship',
                            user,
                            setIsOpen,
                            setRedirectUrl,
                            callback: () => setIsOpenCompanies(false)
                        })
                    }}
                    className="cursor-pointer">
                        <Link href="/profile/add-internship" onClick={() => setIsOpenCompanies(false)}>
                            Προσθήκη Θέσης
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/faq/companies" onClick={() => setIsOpenCompanies(false)}>
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
                        <Link href="/faq" onClick={() => setIsOpenUniversities(false)}>
                            Συχνές Ερωτήσεις
                        </Link>
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
                    <DropdownMenu open={isOpenAccount} onOpenChange={setIsOpenAccount} modal={false}>
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                        <Avatar>
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col items-center">
                            <DropdownMenuItem onClick={() => setIsOpenAccount(false)}>
                                <Link href='/profile'>
                                    Προφίλ
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
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