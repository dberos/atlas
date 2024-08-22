"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import RegisterFormType from "./register-form-type";
import RegisterFormUndergraduate from "./register-form-undergraduate";
import RegisterFormCompany from "./register-form-company";
import RegisterFormInfoCompany from "./register-form-info-company";
import RegisterFormInfoUndergraduate from "./register-form-info-undergraduate";
import { useMode } from "@/hooks/use-mode";
import RegisterNotAllowed from "./register-not-allowed";
import { Button } from "../ui/button";

type UndergraduateInfoType = {
    name: string,
    surname: string,
    university: string,
    department: string,
}

type CompanyInfoType = {
    name: string,
    city: string,
    district: string,
    street: string,
    streetNumber: string
}

const Register = () => {
    const [activeTab, setActiveTab] = useState("type");
    const [selectedType, setSelectedType] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const [company, setCompany] = useState<CompanyInfoType>({
        name: '',
        city: '',
        district: '',
        street: '',
        streetNumber: ''
    });
    const [undergraduate, setUndergraduate] = useState<UndergraduateInfoType>({
        name: '',
        surname: '',
        university: '',
        department: ''
    });

    const { isAllowed } = useMode();

    return ( 
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Button size="sm">
                Εγγραφή
            </Button>
        </DialogTrigger>
        <DialogContent aria-describedby={undefined}>
            <DialogHeader>
            <DialogTitle className="text-center">Δημιουργία Λογαριασμού</DialogTitle>
            </DialogHeader>
            {
                isAllowed ?
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full p-6">
                <TabsList className="w-full">
                    <TabsTrigger value="type">Βήμα 1</TabsTrigger>
                    <TabsTrigger value="info" disabled>Βήμα 2</TabsTrigger>
                    <TabsTrigger value="account" disabled>Βήμα 3</TabsTrigger>
                </TabsList>
                <TabsContent value="type" className="space-y-6">
                <RegisterFormType 
                setSelectedType={setSelectedType}
                setActiveTab={setActiveTab}
                />
                </TabsContent>
                <TabsContent value="info">
                    {
                        selectedType === "undergraduate" ?
                        <RegisterFormInfoUndergraduate
                        setUndergraduate={setUndergraduate}
                        setActiveTab={setActiveTab}
                        /> :
                        <RegisterFormInfoCompany 
                        setCompany={setCompany}
                        setActiveTab={setActiveTab}
                        />
                    }
                </TabsContent>
                <TabsContent value="account">
                    {
                        selectedType === "undergraduate" ?
                        <RegisterFormUndergraduate 
                        setIsOpen={setIsOpen}
                        undergraduate={undergraduate}
                        setActiveTab={setActiveTab}
                        /> :
                        <RegisterFormCompany 
                        setIsOpen={setIsOpen}
                        company={company}
                        setActiveTab={setActiveTab}
                        />
                    }
                </TabsContent>
                </Tabs> :
                <RegisterNotAllowed />
            }
            
        </DialogContent>
        </Dialog>
     );
}
 
export default Register;