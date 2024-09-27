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
import { useTheme } from "next-themes"
import { useAuth } from "@/hooks/use-auth";
import { logoutUser } from "@/server/find-user";
import { Button } from "../ui/button";
import { useMobileMenuStore } from "@/hooks/use-mobile-menu-store";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { updateFieldCookie } from "@/server/search";

const NavMobile = () => {
    const { setTheme } = useTheme();
    const { user, setIsLoggedIn } = useAuth();

    const router = useRouter();

    const { toast } = useToast();

    const isOpen = useMobileMenuStore((state) => state.isOpen);
    const setIsOpen = useMobileMenuStore((state) => state.setIsOpen);

    const handleSearchRedirect = async () => {
        await updateFieldCookie();
    }

    const handleLogout = async () => {
        try {
            await logoutUser();
            window.localStorage.clear();
            setIsLoggedIn(false);
            setIsOpen(false);
            router.replace('/');
        }
        catch (error) {
            toast({
                title: "Προέκυψε σφάλμα"
            })
        }
    }

    return ( 
        <div className="flex items-center gap-x-8">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                                        Προφίλ
                                    </Link>
                                    <p onClick={handleLogout}>
                                        Αποσύνδεση
                                    </p>
                                    </> :
                                    <>
                                    <Link href="/login" onClick={() => setIsOpen(false)}>
                                    Σύνδεση
                                    </Link>
                                    <Link href="/register" onClick={() => setIsOpen(false)}>
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
                            <Link href='/internships?page=1' onClick={async() => {
                                setIsOpen(false);
                                await handleSearchRedirect();
                            }}>
                                Αναζήτηση Θέσης
                            </Link>
                            <Link href="/faq/undergraduates" onClick={() => setIsOpen(false)}>
                                Συχνές Ερωτήσεις
                            </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="companies">
                            <AccordionTrigger className='hover:no-underline'>
                                Εταιρείες
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <Link href="/profile/add-internship" onClick={() => setIsOpen(false)}>
                                Προσθήκη Θέσης
                            </Link>
                            <Link href="/faq/companies" onClick={() => setIsOpen(false)}>
                                Συχνές Ερωτήσεις
                            </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="universities">
                            <AccordionTrigger className='hover:no-underline'>
                                Πανεπιστήμια
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-y-4">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                Διαχείριση
                            </Link>
                            <Link href="/faq" onClick={() => setIsOpen(false)}>
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