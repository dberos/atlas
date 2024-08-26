"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegisterFormType from "./register-form-type";
import RegisterFormUndergraduate from "./register-form-undergraduate";
import RegisterFormCompany from "./register-form-company";
import RegisterFormInfoCompany from "./register-form-info-company";
import RegisterFormInfoUndergraduate from "./register-form-info-undergraduate";
import RegisterNotAllowed from "./register-not-allowed";
import { Button } from "../ui/button";
import { useRegisterStore } from "@/hooks/use-register-store";
import { useModeStore } from "@/hooks/use-mode-store";

const Register = () => {
    const isOpen = useRegisterStore((state) => state.isOpen);
    const setIsOpen = useRegisterStore((state) => state.setIsOpen);
    const activeTab = useRegisterStore((state) => state.activeTab);
    const setActiveTab = useRegisterStore((state) => state.setActiveTab);
    const selectedType = useRegisterStore((state) => state.selectedType);

    const isAllowed = useModeStore((state) => state.isAllowed);

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
            
        </DialogContent>
        </Dialog>
     );
}
 
export default Register;