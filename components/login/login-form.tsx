"use client";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { deleteCsrfToken, setCsrfToken } from "@/server/token";
import { loginUser } from "@/server/find-user";
import { Button } from "../ui/button";

const formSchema = z.object({
    email: z.string(),
    password: z.string(),
    token: z.string()
})

const LoginForm = ({setIsOpen}: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { setIsLoggedIn } = useAuth();
    
    const [formError, setFormError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          token: ""
        },
    })
    async function onSubmit() {
        const token = await setCsrfToken();
        form.setValue('token', token);
        // Needs update after setting value
        const values = form.getValues();
        const response = await loginUser(values)
        if (response.error) {
            await deleteCsrfToken();
            setFormError('Λάθος όνομα χρήστη ή κωδικός.');

        }
        else {
            await deleteCsrfToken();
            window.localStorage.setItem('session', 'true');
            setIsLoggedIn(true);
            setFormError(null);
            form.reset();
            setIsOpen(false);
        }
    }
    return ( 
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Κωδικός Πρόσβασης</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <div className="h-4 w-full">
                    <FormMessage>
                        {formError}
                    </FormMessage>
                </div>
                </FormItem>
            )}
            />
            <Button 
            type="submit"
            disabled={form.getValues().email === "" || form.getValues().password === ""}
            >
                Σύνδεση
            </Button>
        </form>
        </Form>
     );
}
 
export default LoginForm;