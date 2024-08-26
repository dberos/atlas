"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { RegisterFormTypeSchema } from "@/schemas";
import { useRegisterStore } from "@/hooks/use-register-store";

const RegisterFormType = () => {

    const setActiveTab = useRegisterStore((state) => state.setActiveTab);
    const setSelectedType = useRegisterStore((state) => state.setSelectedType);

    const form = useForm<z.infer<typeof RegisterFormTypeSchema>>({
        resolver: zodResolver(RegisterFormTypeSchema),
        defaultValues: {
          type: "",
        },
      })

    function onSubmit(data: z.infer<typeof RegisterFormTypeSchema>) {
        setSelectedType(data.type);
        form.reset();
        setActiveTab("info");
    }

    return ( 
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Είμαι</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Τύπος χρήστη.." />
                    </SelectTrigger>
                    <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
                        <SelectItem value="undergraduate">Φοιτητής</SelectItem>
                        <SelectItem value="company">Ιδιοκτήτης Εταιρείας</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button 
                type="submit"
                disabled={form.getValues('type') === ""}
                >
                    Συνέχεια <ArrowRight className="size-4 ml-2" />
                </Button>
            </form>
        </Form>
     );
}
 
export default RegisterFormType;