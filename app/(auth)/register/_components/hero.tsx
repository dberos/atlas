"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"  
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react";
import RegisterFormType from "./register-form-type";
import RegisterFormUndergraduate from "./register-form-undergraduate";
import RegisterFormCompany from "./register-form-company";
import RegisterFormInfoCompany from "./register-form-info-company";
import RegisterFormInfoUndergraduate from "./register-form-info-undergraduate";
import RegisterNotAllowed from "./register-not-allowed";
import { useRegisterStore } from "@/hooks/use-register-store";
import { useModeStore } from "@/hooks/use-mode-store";

const Hero = () => {

    const activeTab = useRegisterStore((state) => state.activeTab);
    const setActiveTab = useRegisterStore((state) => state.setActiveTab);
    const selectedType = useRegisterStore((state) => state.selectedType);
    const setSelectedType = useRegisterStore((state) => state.setSelectedType);
    const setUndergraduate = useRegisterStore((state) => state.setUndergraduate);
    const setCompany = useRegisterStore((state) => state.setCompany);

    // Unlike register dialog that opens, here need to refresh the values in case user leaves it uncompleted and returns
    useEffect(() => {
        setActiveTab('type');
        setSelectedType('');
        setUndergraduate({
            name: '',
            surname: '',
            university: '',
            department: ''
        }),
        setCompany({
            name: '',
            city: '',
            district: '',
            street: '',
            streetNumber: ''
        })
    }, [setActiveTab, setSelectedType, setUndergraduate, setCompany])


    const isAllowed = useModeStore((state) => state.isAllowed);

    return ( 
        <div className="mt-20 size-full flex flex-col lg:flex-row">
            <div className="h-52 w-full lg:w-3/6 lg:h-96 flex flex-col items-center justify-center gap-y-8">
                <h1 className="font-medium text-4xl lg:text-7xl font-serif text-center">
                    ΑΤΛΑΣ
                </h1>
                <h3 className="font-medium text-lg lg:text-2xl max-w-lg text-center">
                    Δημιουργία νέου λογαριασμού
                </h3>
                <div className="-mt-4 h-2 w-full md:w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <Breadcrumb className="-mt-4 w-full md:w-5/6 lg:w-full xl:w-4/6 flex justify-center md:justify-start">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">Αρχική</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Εγγραφή</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="w-full lg:w-3/6 flex items-center justify-center">
                <div className="w-full md:w-5/6 lg:w-5/6 xl:w-4/6 rounded-md border flex flex-col items-center justify-center pb-4">
                    <h3 className="font-medium text-lg lg:text-xl max-w-lg text-center mt-4">
                        Εγγραφή
                    </h3>
                    {
                        isAllowed ?
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4 p-6">
                        <TabsList className="w-full">
                            <TabsTrigger value="type">Βήμα 1</TabsTrigger>
                            <TabsTrigger value="info" disabled>Βήμα 2</TabsTrigger>
                            <TabsTrigger value="account" disabled>Βήμα 3</TabsTrigger>
                        </TabsList>
                        <TabsContent value="type" className="space-y-6">
                        <RegisterFormType />
                        </TabsContent>
                        <TabsContent value="info">
                            {
                                selectedType === "undergraduate" ?
                                <RegisterFormInfoUndergraduate /> :
                                <RegisterFormInfoCompany />
                            }
                        </TabsContent>
                        <TabsContent value="account">
                            {
                                selectedType === "undergraduate" ?
                                <RegisterFormUndergraduate /> :
                                <RegisterFormCompany />
                            }
                        </TabsContent>
                        </Tabs> :
                        <RegisterNotAllowed />
                    }
                    
                </div>
            </div>
        </div>
     );
}
 
export default Hero;