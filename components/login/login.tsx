"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"  
import { useState } from "react";
import { useMode } from "@/hooks/use-mode";
import { Button } from "../ui/button";
import LoginForm from "./login-form";
import LoginNotAllowed from "./login-not-allowed";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAllowed } = useMode();
    
    return ( 
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
                    Σύνδεση
                </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="size-96">
                <DialogHeader>
                <DialogTitle className="text-center">Σύνδεση</DialogTitle>
                </DialogHeader>
                {
                    isAllowed ?
                    <LoginForm setIsOpen={setIsOpen} /> :
                    <LoginNotAllowed />
                }
            </DialogContent>
        </Dialog>
     );
}
 
export default Login;