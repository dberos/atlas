"use client";

import { useMode } from "@/hooks/use-mode";
import LoginForm from "./login-form";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"  
import LoginNotAllowed from "./login-not-allowed";

const Hero = () => {
    const { isAllowed } = useMode();
    return ( 
        <div className="mt-20 size-full flex flex-col lg:flex-row">
            <div className="h-52 w-full lg:w-3/6 lg:h-96 flex flex-col items-center justify-center gap-y-8">
                <h1 className="font-medium text-4xl lg:text-7xl font-serif text-center">
                    ΑΤΛΑΣ
                </h1>
                <h3 className="font-medium text-lg lg:text-2xl max-w-lg text-center">
                    Συνέχεια με τον λογαριασμό σου!
                </h3>
                <div className="-mt-4 h-2 w-full md:w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <Breadcrumb className="-mt-4 w-full md:w-5/6 lg:w-full xl:w-4/6 flex justify-center md:justify-start">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">Αρχική</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Σύνδεση</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="h-96 w-full lg:w-3/6 flex items-center justify-center">
                <div className="h-96 w-full md:w-5/6 lg:w-5/6 xl:w-4/6 rounded-md border flex flex-col items-center justify-center">
                    <h3 className="font-medium text-lg lg:text-xl max-w-lg text-center mt-4">
                        Σύνδεση
                    </h3>
                    {
                        isAllowed ? 
                        <LoginForm /> :
                        <LoginNotAllowed />
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Hero;