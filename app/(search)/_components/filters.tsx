"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SlidersHorizontal } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
import { useEffect, useState } from "react";
import ComboBox from "./combobox";
import { deleteFieldCookie, getFieldCookie } from "@/server/search";
import { SearchFormSchema } from "@/schemas";

const Filters = () => {
    const form = useForm<z.infer<typeof SearchFormSchema>>({
        resolver: zodResolver(SearchFormSchema),
        defaultValues: {
          field: "",
          duration: "",
          employment: "",
          payment: false
        },
    })

    // Initial state from search input
    useEffect(() => {
        const setValues = async () => {
            const field = await getFieldCookie();
            if (field === "Πρακτικές μέσω ΕΣΠΑ") {
                form.setValue('payment', true);
            }
            form.setValue('field', field ?? "")
            await deleteFieldCookie();
        }
        setValues();
    }, [])

    // Watch for field changes
    const [isDisabledCheckBox, setIsDisabledCheckbox] = useState(false);
    const watchField = form.watch('field');
    useEffect(() => {
        if (form.getValues('field') === 'Πρακτικές χωρίς ΕΣΠΑ') {
            setIsDisabledCheckbox(true);
            form.setValue('payment', false);
        }
        else if (form.getValues('field') === 'Πρακτικές μέσω ΕΣΠΑ') {
            setIsDisabledCheckbox(true);
            form.setValue('payment', true);
        }
        else {
            setIsDisabledCheckbox(false);
            form.setValue('payment', false);
        }
        form.setValue('duration', '');
        form.setValue('employment', '');
    }, [watchField])
     
      function onSubmit(values: z.infer<typeof SearchFormSchema>) {
        console.log(values);
      }

    return ( 
        <div className="w-full mt-20 lg:mt-10 flex items-center max-lg:justify-center">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant='ghost' size='lg'>
                        Φίλτρα Αναζήτησης <SlidersHorizontal className="size-4 ml-2" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full lg:w-[600px]">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                            Προσαρμοσμένη Αναζήτηση
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Επιλέξτε όσα στοιχεία επιθυμείτε
                        </p>
                    </div>
                    <div className="grid gap-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                            control={form.control}
                            name="field"
                            render={() => (
                                <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel>Τομέας</FormLabel>
                                <FormControl>
                                    <ComboBox form={form} field={form.getValues('field')} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel>Διάρκεια</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                    <SelectTrigger className="col-span-2 h-8">
                                        <SelectValue />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="full">6 Μήνες</SelectItem>
                                        <SelectItem value="semi">3 Μήνες</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="employment"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-3 items-center gap-4">
                                <FormLabel>Απασχόληση</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                    <SelectTrigger className="col-span-2 h-8">
                                        <SelectValue />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="full">Πλήρης</SelectItem>
                                        <SelectItem value="semi">Περιορισμένη</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="payment"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-end space-x-2 mt-2">
                                <FormControl>
                                    <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    disabled={isDisabledCheckBox}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Χρηματοδότηση ΕΣΠΑ
                                    </FormLabel>
                                </div>
                                </FormItem>
                            )}
                            />
                            <Button 
                            type="submit"
                            >
                                Αναζήτηση
                            </Button>
                        </form>
                    </Form>
                    </div>
                </div>
                </PopoverContent>
            </Popover>
        </div>
     );
}
 
export default Filters;