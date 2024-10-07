import { HandleProtectRouteType } from "@/types";

// For desktop, protect a specific route and redirect after if not logged in
// And useHandleLogin is called at the login form
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