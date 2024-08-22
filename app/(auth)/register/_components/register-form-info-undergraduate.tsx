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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type UndergraduateInfoType = {
    name: string,
    surname: string,
    university: string,
    department: string,
}

const FormSchema = z.object({
    name: z.string().min(2, { message: 'Το όνομα πρέπεί να είναι τουλάχιστον 2 χαρακτήρες' }),
    surname: z.string().min(2, { message: 'Το επώνυμο πρέπει να είναι τουλάχιστον 2 χαρακτήρες' }),
    university: z.string(),
    department: z.string()
})

const RegisterFormInfoUndergraduate = ({
    setUndergraduate,
    setActiveTab
}: {
    setUndergraduate: React.Dispatch<React.SetStateAction<UndergraduateInfoType>>
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}) => {

    const universities = [
        {
            id: 1,
            value: 'ΕΚΠΑ'
        },
        {
            id: 2,
            value: 'ΑΠΘ'
        },
        {
            id: 3,
            value: 'Πατρών'
        }
    ];
    const departments = [
        {
            id: 1,
            value: 'Πληροφορική'
        },
        {
            id: 2,
            value: 'Ιατρική'
        },
        {
            id: 3,
            value: 'Φιλολογία'
        }
    ];

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          surname: "",
          university: "",
          department: ""
        },
    })
    function onSubmit(values: z.infer<typeof FormSchema>) {
        setUndergraduate({
            name: values.name,
            surname: values.surname,
            university: values.university,
            department: values.department
        });
        form.reset();
        setActiveTab("account");
    }

    return ( 
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Όνομα</FormLabel>
                <FormControl>
                    <Input placeholder="Το όνομα σου..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Επώνυμο</FormLabel>
                <FormControl>
                    <Input placeholder="Το επώνυμό σου..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Πανεπιστήμιο</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Επιλογή πανεπιστημίου..." />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {
                            universities.map((university) => (
                                <SelectItem
                                key={university.id}
                                value={university.value}
                                >
                                    {university.value}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Τμήμα</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Επιλογή τμήματος..." />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {
                            departments.map((department) => (
                                <SelectItem
                                key={department.id}
                                value={department.value}
                                >
                                    {department.value}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button 
            type="submit"
            disabled={form.getValues().name === "" || form.getValues().surname === "" || form.getValues().university === "" || form.getValues().department === ""}
            >
                Συνέχεια
            </Button>
        </form>
        </Form>
     );
}
 
export default RegisterFormInfoUndergraduate;