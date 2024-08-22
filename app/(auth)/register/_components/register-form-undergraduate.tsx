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
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { checkEmailExists } from "@/server/find-user";
import { deleteCsrfToken, setCsrfToken } from "@/server/token";
import { registerUndergraduate } from "@/server/insert-user";

type UndergraduateInfoType = {
    name: string,
    surname: string,
    university: string,
    department: string,
}

const FormSchema = z.object({
    name: z.string(),
    surname: z.string(),
    university: z.string(),
    department: z.string(),
    email: z.string().email({ message: 'Το email δεν είναι έγκυρο' }).
    refine(async (email) => {
        const exists = await checkEmailExists(email);
        return !exists;
    }, { message: "Το email χρησιμοποιείται ήδη" }),
    password: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
    verifyPassword: z.string().min(6, { message: 'Ο κωδικός πρέπει να είναι τουλάχιστον 6 χαρακτήρες' }),
    userType: z.enum(["UNDERGRADUATE", "COMPANY"]),
    token: z.string()
}).refine((data) => data.password === data.verifyPassword, { message: 'Οι κωδικοί πρέπει να ταιριάζουν', path: ["verifyPassword"] })

const RegisterFormUndergraduate = ({
    undergraduate,
    setActiveTab
}: { 
    undergraduate: UndergraduateInfoType ,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: undergraduate.name,
          surname: undergraduate.surname,
          university: undergraduate.university,
          department: undergraduate.department,
          email: "",
          password: "",
          verifyPassword: "",
          userType: "UNDERGRADUATE",
          token: ""
        },
    })
    async function onSubmit() {
        const token = await setCsrfToken();
        form.setValue('token', token);
        // Needs update after setting value
        const values = form.getValues();
        const response = await registerUndergraduate(values);
        if (response.error) {
            form.reset();
            await deleteCsrfToken();
            setActiveTab("type");
            router.push("/")
            toast({
                title: "Προέκυψε σφάλμα."
            })
        }
        else {
            form.reset();
            await deleteCsrfToken();
            setActiveTab("type");
            router.push("/login")
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
 
export default RegisterFormUndergraduate;