"use client";

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

type Item = {
    id: number;
    name: string;
};

const FormSchema = z.object({
    field: z.string(),
    duration: z.string(),
    employment: z.string(),
    payment: z.boolean()
})

const ComboBox = ({
    form, 
    field
}: { 
    form: UseFormReturn<z.infer<typeof FormSchema>>, 
    field: string 
}) => {

    const fields: Item[] = [
        { id: 1, name: 'Όλοι οι Τομείς' },
        { id: 2, name: 'Πρακτικές μέσω ΕΣΠΑ' },
        { id: 3, name: 'Πρακτικές χωρίς ΕΣΠΑ' },
        { id: 4, name: 'Πληροφορική' },
        { id: 5, name: 'Ιατρική' },
        { id: 6, name: 'Φιλολογία' }
    ];

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(field);

    useEffect(() => {
        form.setValue('field', value);
    }, [value])

    return ( 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="col-span-2 h-8">
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
                >
                {value
                    ? fields.find((field) => field.name === value)?.name
                    : "Αναζήτηση τομέα..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] lg:w-[370px] p-0">
                <Command>
                <CommandInput placeholder="Τομείς..." />
                <CommandList className="h-auto max-h-32 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                    <CommandEmpty>Κανένα αποτέλεσμα αναζήτησης.</CommandEmpty>
                    <CommandGroup>
                    {fields.map((field) => (
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
 
export default ComboBox;