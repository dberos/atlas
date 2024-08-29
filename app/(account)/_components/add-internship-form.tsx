"use client";

import { AddInternshipFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react";
import { fieldsAddInternship } from "@/data";
import { Checkbox } from "@/components/ui/checkbox"

const ComboBox = ({form}: { form: UseFormReturn<z.infer<typeof AddInternshipFormSchema>> }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        form.setValue('field', value);
    }, [value])
    return ( 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
                >
                {value
                    ? fieldsAddInternship.find((field) => field.name === value)?.name
                    : "Αναζήτηση τομέα..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                <CommandInput placeholder="Τομείς..." />
                <CommandList className="h-auto max-h-32 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                    <CommandEmpty>Κανένα αποτέλεσμα αναζήτησης.</CommandEmpty>
                    <CommandGroup>
                    {fieldsAddInternship.map((field) => (
                        <CommandItem
                        className="data-[disabled]:pointer-events-auto cursor-pointer"
                        key={field.id}
                        value={field.name}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        <Check
                            className={cn(
                            "mr-2 h-4 w-4",
                            value === field.name ? "opacity-100" : "opacity-0"
                            )}
                        />
                        {field.name}
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

const AddInternshipForm = () => {
    const form = useForm<z.infer<typeof AddInternshipFormSchema>>({
        resolver: zodResolver(AddInternshipFormSchema),
        defaultValues: {
          title: "",
          field: "",
          duration: "",
          employment: "",
          espa: false,
          salary: ""
        },
    })
     
    function onSubmit(values: z.infer<typeof AddInternshipFormSchema>) {
        console.log(values);
    }

    // Disabled if payment ESPA is true
    const [isDisabledSalary, setIsDisabledSalary] = useState(false);

    // Watch for checkbox changes
    const watchPayment = form.watch('espa');
    useEffect(() => {
        if (form.getValues('espa') === true) {
            // Default 250
            form.setValue('salary', '250');
            setIsDisabledSalary(true);
        }
        else {
            form.setValue('salary', '');
            setIsDisabledSalary(false);
        }
    }, [watchPayment])

    // Watch for salary changes
    const watchSalary = form.watch('salary');
    useEffect(() => {
        // Needs update since in payment it is set to empty string after update
        form.setValue('salary', form.getValues('salary'));
    }, [watchSalary])

    return ( 
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Τίτλος Θέσης</FormLabel>
                    <FormControl>
                        <Input placeholder="π.χ Web Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="field"
                render={() => (
                    <FormItem>
                    <FormLabel>Τομέας</FormLabel>
                    <FormControl>
                        <ComboBox form={form} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-4">
                    <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem className="lg:w-1/2">
                        <FormLabel>Διάρκεια</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                            <SelectTrigger>
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
                        <FormItem className="lg:w-1/2">
                        <FormLabel>Απασχόληση</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                            <SelectTrigger>
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
                </div>
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-4">
                <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                        <FormItem className="lg:w-1/2">
                        <FormLabel>Μισθός</FormLabel>
                        <FormControl>
                            <Input 
                            placeholder="π.χ 600" 
                            {...field} 
                            disabled={isDisabledSalary}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="espa"
                    render={({ field }) => (
                        <FormItem className="flex items-center justify-end space-x-2 lg:w-1/2 lg:mt-8">
                        <FormControl>
                            <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Χρηματοδότηση ΕΣΠΑ
                        </FormLabel>
                        </FormItem>
                    )}
                    />
                </div>
                <Button 
                type="submit"
                disabled={form.getValues('title') === '' || form.getValues('field') === '' || form.getValues('duration') === '' || form.getValues('employment') === '' || form.getValues('salary') === '' }
                >
                    Υποβολή
                </Button>
            </form>
        </Form>
    );
}
 
export default AddInternshipForm;