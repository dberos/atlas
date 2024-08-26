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
import { RegisterFormInfoCompanySchema } from "@/schemas";
import { cities } from "@/data";
import { useRegisterStore } from "@/hooks/use-register-store";

const RegisterFormInfoCompany = () => {

    const setActiveTab = useRegisterStore((state) => state.setActiveTab);
    const setCompany = useRegisterStore((state) => state.setCompany);

    const form = useForm<z.infer<typeof RegisterFormInfoCompanySchema>>({
        resolver: zodResolver(RegisterFormInfoCompanySchema),
        defaultValues: {
          name: "",
          city: "",
          district: "",
          street: "",
          streetNumber: ""
        },
    })
    function onSubmit(values: z.infer<typeof RegisterFormInfoCompanySchema>) {
        setCompany({
            name: values.name,
            city: values.city,
            district: values.district,
            street: values.street,
            streetNumber: values.streetNumber
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
                <FormLabel>Όνομα Εταιρείας</FormLabel>
                <FormControl>
                    <Input placeholder="Το όνομα της εταιρείας σου..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Πόλη</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Επιλογή πόλης της Εταιρείας..." />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {
                            cities.map((city) => (
                                <SelectItem
                                key={city.id}
                                value={city.value}
                                >
                                    {city.value}
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
            name="district"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Περιοχή Εταιρείας</FormLabel>
                <FormControl>
                    <Input placeholder="Η περιοχή της εταιρείας σου..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <div className="flex w-full gap-x-2">
                <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                    <FormItem className="w-4/6">
                    <FormLabel>Οδός</FormLabel>
                    <FormControl>
                        <Input placeholder="Οδός Εταιρείας..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="streetNumber"
                render={({ field }) => (
                    <FormItem className="w-2/6">
                    <FormLabel>Αριθμός</FormLabel>
                    <FormControl>
                    <Input
                        type="text"
                        placeholder="Αριθμός..."
                        {...field}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                            field.onChange(e);
                        }
                        }}
                    />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <Button 
            type="submit"
            disabled={form.getValues('name') === "" || form.getValues('city') === "" || form.getValues('district') === "" || form.getValues('street') === "" || form.getValues('streetNumber') === ""}
            >
                Συνέχεια
            </Button>
        </form>
        </Form>
     );
}
 
export default RegisterFormInfoCompany;