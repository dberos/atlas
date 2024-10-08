"use client";

import { useEffect, useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInputRounded,
    CommandItem,
    CommandList,
} from "@/components/ui/command"  
import useCloseModal from "@/hooks/use-close-modal";
import { useRouter } from "next/navigation";
import { setFieldCookie } from "@/server/search";
import { FieldType, SearchCookieType } from "@/types";
import { fields, suggestions } from "@/data";

const Search = () => {
    // Search input
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const router = useRouter();
    // When clicked or enter click
    const handleSelect = async (item: FieldType) => {
        setInputValue(item.name);
        const data: SearchCookieType = {
            field: item.name,
            duration: "",
            employment: "",
            city: ""
        }
        await setFieldCookie(JSON.stringify(data));
        setTimeout(() => router.push('/internships?page=1'), 0);
    }

    // Show suggestions on focused without anything typed
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    }

    // Close the expandable div and clear input
    const handleClickOutside = () => {
        setIsFocused(false);
        setInputValue("");
    }

    const ref = useCloseModal(handleClickOutside);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;

    return ( 
        <Command 
        className="w-full md:w-5/6 lg:w-4/6 border h-auto z-40"
        onFocus={handleFocus}
        ref={ref}
        >
            <CommandInputRounded placeholder="Αναζήτηση Θέσης..." 
            value={inputValue}
            onChangeCapture={handleInputChange}
            noBorder={inputValue === ""}
            anotherIcon={inputValue !== ""}
            setInputValue={setInputValue}
            />
            <CommandList className="h-auto max-h-48 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                {
                    inputValue && 
                    <>
                    <CommandEmpty>Κανένα αποτέλεσμα αναζήτησης.</CommandEmpty>
                    <CommandGroup heading="Τομείς">
                    {
                        fields.map((item) => (
                            <CommandItem
                            key={item.id}
                            value={item.name}
                            className="data-[disabled]:pointer-events-auto cursor-pointer data-[disabled]:opacity-80 dark:data-[disabled]:opacity-50"
                            onSelect={() => handleSelect(item)}
                            >   
                                {item.name}
                            </CommandItem>
                        ))
                    }
                    </CommandGroup>
                    </>
                }
                {
                    isFocused &&
                    <CommandGroup heading="Προτάσεις">
                    {
                        suggestions.map((item) => (
                            <CommandItem
                            key={item.id}
                            value={item.name}
                            className="data-[disabled]:pointer-events-auto cursor-pointer data-[disabled]:opacity-80 dark:data-[disabled]:opacity-50"
                            onSelect={() => handleSelect(item)}
                            >   
                                {item.name}
                            </CommandItem>
                        ))
                    }
                    </CommandGroup>
                }
            </CommandList>
        </Command>
    );
}
 
export default Search;