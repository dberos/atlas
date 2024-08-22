import { Skeleton } from "../ui/skeleton";

const RegisterNotAllowed = () => {
    return ( 
        <div className="flex flex-col justify-center gap-y-8 p-2">
            <div className="w-full flex flex-row gap-x-4 justify-center">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-1/4" />
        </div>
     );
}
 
export default RegisterNotAllowed;