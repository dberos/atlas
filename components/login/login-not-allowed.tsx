"use client";

import useHandleLogin from "@/hooks/use-handle-login";
import { Skeleton } from "../ui/skeleton";

const LoginNotAllowed = () => {

    useHandleLogin();

    return ( 
        <div className="-mt-20 flex flex-col justify-center space-y-8 p-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-1/3" />
        </div>
     );
}
 
export default LoginNotAllowed;