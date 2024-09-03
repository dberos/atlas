"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"  
import { Button } from "../ui/button";
import LoginForm from "./login-form";
import LoginNotAllowed from "./login-not-allowed";
import { useLoginStore } from "@/hooks/use-login-store";
import { useModeStore } from "@/hooks/use-mode-store";

const Login = () => {
    
    const isAllowed = useModeStore((state) => state.isAllowed);

    const isOpen = useLoginStore((state) => state.isOpen);
    const setIsOpen = useLoginStore((state) => state.setIsOpen)
    
    return ( 
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" size="sm">
                    Σύνδεση
                </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="size-96" onMouseDown={(e) => e.stopPropagation()}>
                <DialogHeader>
                <DialogTitle className="text-center">Σύνδεση</DialogTitle>
                </DialogHeader>
                {
                    isAllowed ?
                    <LoginForm /> :
                    <LoginNotAllowed />
                }
            </DialogContent>
        </Dialog>
     );
}
 
export default Login;