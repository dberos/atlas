"use client";

import { EditFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { deleteCsrfToken, setCsrfToken } from "@/server/token";
import { updateUser } from "@/server/insert-user";
import { logoutUser } from "@/server/find-user";
import { useAuth } from "@/hooks/use-auth";

const EditForm = () => {

    const { toast } = useToast();
    const router = useRouter();

    const { setIsLoggedIn } = useAuth();

    const form = useForm<z.infer<typeof EditFormSchema>>({
        resolver: zodResolver(EditFormSchema),
        defaultValues: {
          password: "",
          newPassword: "",
          verifyPassword: "",
          token: ""
        },
      })
     
    async function onSubmit() {
        const csrfToken = await setCsrfToken();
        form.setValue('token', csrfToken);
        const values = form.getValues();
        const response = await updateUser(values);
        if (response) {
            form.reset();
            await deleteCsrfToken();
            await logoutUser();
            window.localStorage.clear();
            setIsLoggedIn(false);
            router.replace('/');
            toast({
                title: "Ο κωδικός πρόσβασης άλλαξε με επιτυχία"
            });
        }
        else {
            form.reset();
            await deleteCsrfToken();
            router.replace('/profile');
            toast({
                title: "Προέκυψε σφάλμα"
            })
        }
    }

    return ( 
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Κωδικός Πρόσβασης</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Νέος Κωδικός</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="verifyPassword"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Επιβεβαίωση Κωδικού</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">
                Συνέχεια
            </Button>
        </form>
        </Form>
    );
}
 
export default EditForm;