"use client";

import { useAuth } from "@/hooks/use-auth";
import OptionsUndergraduate from "./options-undergraduate";
import OptionsCompany from "./options-company";
import OptionsLoading from "./options-loading";

const Options = () => {
    const { user } = useAuth();
    if (!user) {
        return (
            <OptionsLoading />
        )
    }
    return ( 
        <>
            {
                user && user.type === 'UNDERGRADUATE' ?
                <OptionsUndergraduate /> :
                <OptionsCompany />
            }
        </>
     );
}
 
export default Options;