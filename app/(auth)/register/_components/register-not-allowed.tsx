import { Skeleton } from "@/components/ui/skeleton";

const RegisterNotAllowed = () => {
    return ( 
        <div className="w-5/6 h-72 flex flex-col justify-center gap-y-8 p-2">
            <div className="w-full flex flex-row gap-x-4 justify-center">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-1/3" />
        </div>
     );
}
 
export default RegisterNotAllowed;