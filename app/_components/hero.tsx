import Image from "next/image";
import Search from "./search";

const Hero = () => {
    return ( 
        <div className="w-full h-[70vh] md:h-[60vh] lg:h-[50vh] xl:h-[60vh] grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 mt-20 lg:mt-10">
            <div className="flex flex-col items-center justify-center gap-y-8">
                <h1 className="font-medium text-4xl lg:text-7xl font-serif text-center">
                    ΑΤΛΑΣ
                </h1>
                <h3 className="flex flex-col font-medium text-lg lg:text-2xl max-w-lg text-center">
                    Ξεκίνα την επαγγελματική σου σταδιοδρομία με ένα απλό βήμα!
                </h3>
                <div className="-mt-4 h-2 w-full md:w-5/6 xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <div className="overflow-y-visible w-full h-20 flex items-start justify-center">
                    <Search />
                </div>
            </div>
            <div className="size-full flex items-center 2xl:items-start 2xl:mt-6 justify-center">
                <Image 
                src="/home-hero.svg"
                alt="woman reading"
                width={100}
                height={100}
                priority
                className="size-full md:size-5/6 2xl:size-4/6 object-contain"
                />
            </div>
        </div>
    );
}
 
export default Hero;