"use client";

import { Button } from "@/components/ui/button";
import useCloseModal from "@/hooks/use-close-modal";
import { cn } from "@/lib/utils";
import { FaqType } from "@/types";
import { CircleHelp, Maximize2, PencilLine } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Faq = ({
    title,
    description,
    isOpen,
    onToggle
}: FaqType & {
    isOpen: boolean,
    onToggle: () => void
}) => {
    // Expandable div transitioning
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    // Give ring when it opens and remove when clicked inside or closes
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseDown = () => {
        setIsFocused(false);
    };

    const fragmentRef = useCloseModal(() => {
        if (isOpen) {
            onToggle();
        }
    });

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
    
        if (isOpen && contentRef.current && fragmentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
            setIsFocused(true);
            fragmentRef.current.focus();
            timeoutId = setTimeout(() => {
                // When the animation finishes, scroll into view
                window.requestAnimationFrame(() => {
                    fragmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                });
            }, 500);
        } else {
            setMaxHeight("0px");
            setIsFocused(false);
            fragmentRef.current?.blur();
        }
    
        return () => clearTimeout(timeoutId);
    }, [isOpen, fragmentRef]);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;
    return ( 
        <div className={cn(
            "relative rounded-md w-full lg:w-4/5 2k:w-4/6 flex flex-col items-center justify-center scroll-mt-24",
            isFocused && "ring-2 ring-muted-foreground ring-offset-2 ring-offset-border"
        )}
        ref={fragmentRef}
        onMouseDown={handleMouseDown}
        >
            <div className={cn(
                "w-full h-72 md:h-52 lg:h-36 flex items-center justify-center bg-slate-200 dark:bg-slate-900 z-10",
                isOpen ? 'rounded-t-md' : 'rounded-md'
            )}>
                <div className="flex items-center justify-center w-full">
                    <CircleHelp className="absolute size-10 top-8 left-auto right-auto md:top-6 lg:top-auto lg:left-8 text-orange-600" />
                    <Button
                    type="button"
                    size='lg'
                    variant='ghost'
                    onClick={onToggle}
                    className="h-auto min-h-10"
                    >   
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-center max-w-md whitespace-normal">
                            {title}
                        </p>
                    </Button>
                </div>
            </div>
            <div 
                style={{ maxHeight }}
                ref={contentRef}
                className={cn(
                    "relative w-full overflow-hidden bg-slate-200 dark:bg-slate-900 z-20 transition-all duration-500 ease-in-out",
                    isOpen ? 'rounded-b-md' : 'rounded-md'
                )}
            >   
            <div className="flex items-center justify-center w-full p-8 lg:p-14">
                <PencilLine className="absolute top-0 right-auto left-auto lg:top-14 lg:right-8 size-8 text-orange-600" />
                <p className="mt-10 mb-10 lg:mt-0 text-center max-w-3xl text-base lg:text-lg">
                    {description}
                </p>
            </div>
            </div>
            <Button
            type="button"
            size='icon'
            variant='ghost'
            className="absolute bottom-4 right-4 cursor-pointer z-30"
            onClick={onToggle}
            >
                <Maximize2 className="size-6 text-orange-600" />
            </Button>
        </div>
    );
}
 
export default Faq;