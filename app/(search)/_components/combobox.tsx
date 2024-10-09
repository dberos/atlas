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
import { fieldsComboBox } from "@/data";
import { SearchFormSchema } from "@/schemas";

const ComboBox = ({
    form, 
    field
}: { 
    form: UseFormReturn<z.infer<typeof SearchFormSchema>>, 
    field: string 
}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(field);

    useEffect(() => {
        form.setValue('field', value);
    }, [value, form])

    return ( 
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="col-span-2 h-10 lg:h-8">
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="max-lg:w-[200px] w-full justify-between truncate"
                >
                <span className="truncate block overflow-hidden whitespace-nowrap">
                    {value
                    ? fieldsComboBox.find((field) => field.name === value)?.name
                    : "Αναζήτηση τομέα..."}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                <CommandInput placeholder="Τομείς..." />
                <CommandList className="h-auto max-h-24 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                    <CommandEmpty>Κανένα αποτέλεσμα αναζήτησης.</CommandEmpty>
                    <CommandGroup>
                    {fieldsComboBox.map((field) => (
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