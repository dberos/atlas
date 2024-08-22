"use client";

import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"  
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes"
import { useAuth } from "@/hooks/use-auth";
import { logoutUser } from "@/server/find-user";
import { Button } from "../ui/button";

const NavMobile = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { setTheme } = useTheme();
    const { user, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        logoutUser();
        window.localStorage.clear();
        setIsLoggedIn(false);
        setIsOpenMenu(false);
    }

    return ( 
        <div className="flex items-center gap-x-8">
            <Sheet open={isOpenMenu} onOpenChange={setIsOpenMenu}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="size-full">
                    <SheetHeader>
                    <SheetTitle>internship-search</SheetTitle>
                    <SheetDescription>
                        Menu
                    </SheetDescription>
                    </SheetHeader>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="theme">
                            <AccordionTrigger className='hover:no-underline'>
                                Λειτουργία
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <p onClick={() => setTheme("light")}>
                                Ανοιχτόχρωμη
                            </p>
                            <p onClick={() => setTheme("dark")}>
                                Σκουρόχρωμη
                            </p>
                            <p onClick={() => setTheme("system")}>
                                Συστήματος
                            </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="account">
                            <AccordionTrigger className='hover:no-underline'>
                                Λογαριασμός
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                                {
                                    user ?
                                    <>
                                    <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                        Προφίλ
                                    </Link>
                                    <p onClick={handleLogout}>
                                        Αποσύνδεση
                                    </p>
                                    </> :
                                    <>
                                    <Link href="/login" onClick={() => setIsOpenMenu(false)}>
                                    Σύνδεση
                                    </Link>
                                    <Link href="/register" onClick={() => setIsOpenMenu(false)}>
                                        Εγγραφή
                                    </Link>
                                    </>
                                    
                                    
                                }
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="undergraduates">
                            <AccordionTrigger className='hover:no-underline'>
                                Φοιτητές
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Αναζήτηση Θέσης
                            </Link>
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Συχνές Ερωτήσεις
                            </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="companies">
                            <AccordionTrigger className='hover:no-underline'>
                                Εταιρείες
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Προσθήκη Θέσης
                            </Link>
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Συχνές Ερωτήσεις
                            </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="universities">
                            <AccordionTrigger className='hover:no-underline'>
                                Πανεπιστήμια
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Διαχείριση
                            </Link>
                            <Link href="/" onClick={() => setIsOpenMenu(false)}>
                                Συχνές Ερωτήσεις
                            </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <p className="py-4 border-b font-medium">
                            Επικοινωνία
                        </p>
                    </Accordion>
                </SheetContent>
            </Sheet>
            
        </div>
     );
}
 
export default NavMobile;