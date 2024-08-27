import { OptionType } from "@/types";
import Image from "next/image";

const Option = ({
    title,
    imageSrc,
    imageAlt,
    link
}: OptionType) => {
    return ( 
        <div className="w-full md:w-5/6 lg:w-1/3 h-60 flex flex-col items-center border border-solid rounded-md">
            <div className="rounded-md h-2 w-full bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
            <div className="w-full h-14 flex items-center justify-center">
                <h3 className="text-center font-medium text-lg cursor-pointer">
                    {title}
                </h3>
            </div>
            <div className="w-full h-40 flex items-center justify-center">
                <Image 
                src={imageSrc}
                alt={imageAlt}
                width={100}
                height={100}
                priority
                className="size-5/6 lg:size-4/6 object-contain xl:cursor-pointer xl:hover:scale-105 xl:transition ease-in-out"
                />
            </div>
        </div>
    );
}
 
export default Option;