"use client";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { deleteCsrfToken, setCsrfToken } from "@/server/token";
import { registerCompany } from "@/server/insert-user";
import { useToast } from "../ui/use-toast";
import { checkEmailExists } from "@/server/find-user";

type CompanyInfoType = {
    name: string,
    city: string,
    district: string,
    street: string,
    streetNumber: string
}

const FormSchema = z.object({
    name: z.string(),
    city: z.string(),
    district: z.string(),
    street: z.string(),
    streetNumber: z.string(),
    email: z.string().email({ message: 'Το email δεν είναι έγκυρο' }).
    refine(async (email) => {
        const exists = await checkEmailExists(email);
        return !exists;
    }, { message: "Το email χρησιμοποιείται ήδη" }),
    password: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
    verifyPassword: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
    userType: z.enum(["UNDERGRADUATE", "COMPANY"]),
    token: z.string()
}).refine((data) => data.password === data.verifyPassword, { message: "Οι κωδικοί πρέπει να ταιριάζουν", path: ["verifyPassword"] })

const RegisterFormCompany = ({
    setIsOpen,
    company,
    setActiveTab
}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    company: CompanyInfoType,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { toast } = useToast();


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: company.name,
          city: company.city,
          district: company.district,
          street: company.street,
          streetNumber: company.streetNumber,
          email: "",
          password: "",
          verifyPassword: "",
          userType: "COMPANY",
          token: ""
        },
    })
    async function onSubmit() {
        const csrfToken = await setCsrfToken();
        form.setValue('token', csrfToken);
        // Needs update after setting value
        const values = form.getValues();
        const response = await registerCompany(values);
        if (response.error) {
            form.reset();
            await deleteCsrfToken();
            setActiveTab("type");
            setIsOpen(false);
            toast({
                title: "Προέκυψε σφάλμα"
            })
        }
        else {
            form.reset();
            await deleteCsrfToken();
            setActiveTab("type");
            setIsOpen(false);
            toast({
                title: "Ο λογαριασμός δημιουργήθηκε με επιτυχία!",
            })
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
            <Button 
            type="submit"
            disabled={form.getValues().email === "" || form.getValues().password === "" || form.getValues().verifyPassword === ""}
            >
                Εγγραφή
            </Button>
        </form>
        </Form>
     );
}
 
export default RegisterFormCompany;