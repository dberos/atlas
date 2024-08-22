"use client";

import { useEffect, useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"  
import useCloseModal from "@/hooks/use-close-modal";
import { useRouter } from "next/navigation";
import { setFieldCookie } from "@/server/search";

type Item = {
    id: number;
    name: string;
};

const Search = () => {
    // Search input
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const router = useRouter();
    // When clicked or enter click
    const handleSelect = async (item: Item) => {
        setInputValue(item.name);
        await setFieldCookie(item.name);
        router.push('/internships');
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

    const items: Item[] = [
        { id: 1, name: 'Πληροφορική' },
        { id: 2, name: 'Ιατρική' },
        { id: 3, name: 'Φιλολογία' },
    ];

    const suggestions: Item[] = [
        { id: 1, name: 'Όλοι οι Τομείς' },
        { id: 2, name: 'Πρακτικές μέσω ΕΣΠΑ' },
        { id: 3, name: 'Πρακτικές χωρίς ΕΣΠΑ' }
    ];

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true));
    if (!isMounted) return null;

    return ( 
        <Command 
        className="w-full md:w-5/6 lg:w-4/6 border h-auto z-50"
        onFocus={handleFocus}
        ref={ref}
        >
            <CommandInput placeholder="Αναζήτηση Θέσης..." 
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
                        items.map((item) => (
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