"use client";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ListRestart, Search, SlidersHorizontal } from "lucide-react";
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
import { useCallback, useEffect, useState } from "react";
import ComboBox from "./combobox";
import { getFieldCookie, setFieldCookie } from "@/server/search";
import { SearchFormSchema } from "@/schemas";
import { useInternshipStore } from "@/hooks/use-internship-store";
import { useRouter } from "next/navigation";
import { SearchCookieType } from "@/types";

const Filters = () => {

    const router = useRouter();

    const FIELDS = {
        ALL: 'all',
        ALL_ESPA: 'all espa',
        ALL_NO_ESPA: 'all no espa'
    };

    const mapFieldName = useCallback((field: string): string => {
        switch (field) {
            case "Πρακτικές μέσω ΕΣΠΑ":
                return FIELDS.ALL_ESPA;
            case "Πρακτικές χωρίς ΕΣΠΑ":
                return FIELDS.ALL_NO_ESPA;
            case "Όλοι οι Τομείς":
                return FIELDS.ALL;
            default:
                return field;
        }
    }, [FIELDS.ALL, FIELDS.ALL_ESPA, FIELDS.ALL_NO_ESPA]);

    // Internship search values
    const data = useInternshipStore((state) => state.data);
    const setData = useInternshipStore((state) => state.setData);

    // Popover open
    const [isOpen, setIsOpen] = useState(false);

    // Handle select click going through checkbox or buttons
    const [isOpenDutation, setIsOpenDuration] = useState(false);
    const [isOpenEmployment, setIsOpenEmployment] = useState(false);

    const handleOpenDuration = () => {
        if (!isOpenDutation) {
            setIsOpenDuration(true);
        }
        else {
            setTimeout(() => setIsOpenDuration(false), 0);
        }
    }

    const handleOpenEmployment = () => {
        if (!isOpenEmployment) {
            setIsOpenEmployment(true);
        }
        else {
            setTimeout(() => setIsOpenEmployment(false), 0);
        }
    }

    const form = useForm<z.infer<typeof SearchFormSchema>>({
        resolver: zodResolver(SearchFormSchema),
        defaultValues: {
          field: "",
          duration: "",
          employment: "",
          espa: false
        },
    })

    // Initial state from search input, or mobile redirect from login
    useEffect(() => {
        const setValues = async () => {
            const parsedCookie = await getFieldCookie();
            if (!parsedCookie) return;

            const newField = mapFieldName(parsedCookie.field);

            form.setValue('field', parsedCookie.field);
            form.setValue('duration', parsedCookie.duration),
            form.setValue('employment', parsedCookie.employment);
            if (parsedCookie.espa !== undefined) {
                form.setValue('espa', parsedCookie.espa);
            }
            else {
                form.setValue('espa', newField === FIELDS.ALL_ESPA);
            }
            setData({ 
                field: newField, 
                duration: parsedCookie.duration, 
                employment: parsedCookie.employment, 
                espa: parsedCookie.espa !== undefined ? parsedCookie.espa : newField === FIELDS.ALL_ESPA 
            });
        };
        setValues();
    }, [FIELDS.ALL_ESPA, form, mapFieldName, setData]);

    // Disabled with FIELDS in field
    const [isDisabled, setIsDisabled] = useState(false);
    // Watch for field changes
    const watchField = form.watch('field');
    useEffect(() => {
        const newField = mapFieldName(watchField);
        const isFieldDisabled = !newField || newField === FIELDS.ALL || newField.includes('espa');

        setIsDisabled(isFieldDisabled);

        // When field changes, reset all the rest form fields
        // Unless the page hasn't reload and user went back, to keep the form values
        if (data.field === watchField) return;
        form.reset({
            field: watchField,
            duration: '',
            employment: '',
            espa: newField === FIELDS.ALL_ESPA
        })
    }, [watchField, FIELDS.ALL, FIELDS.ALL_ESPA, data.field, form, mapFieldName ]);
     
    async function onSubmit() {
        const values: z.infer<typeof SearchFormSchema> = form.getValues();
        const newField = mapFieldName(values.field);
        setData({
            field: newField,
            duration: values.duration,
            employment: values.employment,
            espa: values.espa
        });
        const dataSearch: SearchCookieType = {
            field: values.field,
            duration: values.duration,
            employment: values.employment,
            espa: values.espa
        }
        await setFieldCookie(JSON.stringify(dataSearch));
        setIsOpen(false);
        router.push('/internships?page=1')
    }

    return ( 
        <div className="w-full mt-20 mb-20 lg:mt-10 lg:mb-10 flex items-center max-lg:justify-center">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
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
                                <Select 
                                onValueChange={field.onChange} 
                                value={field.value} 
                                disabled={isDisabled}
                                open={isOpenDutation}
                                onOpenChange={handleOpenDuration}
                                >
                                    <FormControl>
                                    <SelectTrigger className="col-span-2 h-8 focus:ring-transparent">
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
                                <Select 
                                onValueChange={field.onChange} 
                                value={field.value} 
                                disabled={isDisabled}
                                open={isOpenEmployment}
                                onOpenChange={handleOpenEmployment}
                                >
                                    <FormControl>
                                    <SelectTrigger className="col-span-2 h-8 focus:ring-transparent">
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
                            name="espa"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-end space-x-2 mt-2">
                                <FormControl>
                                    <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    disabled={isDisabled}
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
                            <div className="mt-4 lg:mt-0 flex gap-x-4">
                                <Button 
                                type="submit"
                                className="space-x-2"
                                >
                                    <Search className="size-4 mr-2" />
                                    Αναζήτηση
                                </Button>
                                <Button
                                type="button"
                                size='icon'
                                variant='secondary'
                                onClick={() => {
                                    // Fix flushSync error with 0 timeouts
                                    // On mobile when clearing form with true espa, when toast is still showing
                                    setTimeout(() => form.reset({
                                        field: '',
                                        duration: '',
                                        employment: '',
                                        espa: false
                                    }), 0);
                                    setTimeout(() => onSubmit(), 0);
                                }}
                                >
                                    <ListRestart className="size-6" />
                                </Button>
                            </div>
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