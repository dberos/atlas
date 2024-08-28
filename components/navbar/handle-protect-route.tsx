import { HandleProtectRouteType } from "@/types";

// For desktop, protect a specific route and redirect after if not logged in
const handleProtectRoute = ({
    redirectUrl,
    user,
    setIsOpen,
    setRedirectUrl,
    callback
}: HandleProtectRouteType) => {
    if (!user) {
        setIsOpen(true);
        setRedirectUrl(redirectUrl);
    }
    callback();
    
}
 
export default handleProtectRoute;