import { CircleHelp, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return ( 
        <footer className="w-full h-[700px] md:h-96 xl:h-64 bg-slate-100 dark:bg-slate-900 flex flex-wrap">
            <div className="w-full xl:w-1/4 h-1/4 md:h-2/4 xl:h-full order-2 xl:order-1 p-2 flex flex-col items-center justify-center gap-y-4">
                <p className="font-serif font-medium text-lg lg:text-xl">
                    ΑΤΛΑΣ
                </p>
                <p className="text-center max-w-xs text-sm lg:text-base">
                    Σύστημα Κεντρικής Υποστήριξης της Πρακτικής Άσκησης Φοιτητών ΑΕΙ
                </p>
                <p className="text-xs lg:text-sm text-center">
                    &copy; 2024 All rights reserved.
                </p>
            </div>
            <div className="w-full xl:w-3/4 h-3/4 md:h-2/4 xl:h-full grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 order-1">
                <div className="flex flex-col items-center gap-y-4 md:gap-y-2 p-10 lg:p-16 order-1 lg:order-2">
                    <p className="font-medium text-center text-base">
                        Χρήσιμοι Σύνδεσμοι
                    </p>
                    <div className="flex flex-col">
                        <Button variant='link' size="sm">
                            Επικοινωνία <Mail className="size-4 ml-2" />
                        </Button>
                        <Button variant='link' size="sm">
                            Συχνές Ερωτήσεις <CircleHelp className="size-4 ml-2" />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4 p-10 lg:p-16 order-2 lg:order-3">
                    <p className="font-medium text-center text-base">
                        Νομικά
                    </p>
                    <div className="flex flex-col">
                        <Button variant='link' size="sm">
                            Πολιτική Απορρήτου
                        </Button>
                        <Button variant='link' size="sm">
                            Όροι και προϋποθέσεις
                        </Button>
                        <Button variant='link' size="sm">
                            Cookies
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4 p-10 lg:p-16 order-3 lg:order-4">
                    <p className="font-medium text-center text-base">
                        Μάθετε για εμάς
                    </p>
                    <div className="flex flex-col">
                        <Button variant='link' size="sm">
                            Νέα - Ανακοινώσεις
                        </Button>
                        <Button variant='link' size="sm">
                            Συνεργαζόμενα Πανεπιστήμια
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;