import { Skeleton } from "@/components/ui/skeleton";

const OptionsLoading = () => {
    return ( 
        <div className="lg:mt-20 pb-10 w-full 2xl:w-5/6 flex items-center justify-center flex-col lg:flex-row gap-y-8 lg:gap-x-16 2xl:px-20">
            <Skeleton className="w-full md:w-5/6 lg:w-1/3 h-60 flex flex-col items-center border border-solid rounded-md" />
            <Skeleton className="w-full md:w-5/6 lg:w-1/3 h-60 flex flex-col items-center border border-solid rounded-md" />
            <Skeleton className="w-full md:w-5/6 lg:w-1/3 h-60 flex flex-col items-center border border-solid rounded-md" />
        </div>
     );
}
 
export default OptionsLoading;