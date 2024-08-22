import { Button } from "@/components/ui/button";
import Image from "next/image";

const Personas = () => {
    return ( 
        <div className="mt-20 w-full h-[150vh] md:h-[120vh] lg:h-[80vh] grid grid-rows-3 grid-cols-1 lg:grid-rows-2 lg:grid-cols-1">
            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-rows-1 lg:grid-cols-2">
                <div className="flex flex-col items-center">
                    <div className="h-2 w-5/6 xl:w-4/6 bg-gradient-to-r from-orange-300 via-orange-200 to-slate-300 dark:from-orange-500 dark:via-orange-300 dark:to-slate-800" />
                    <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer">
                        Προσθήκη Πρακτικής Άσκησης
                    </h3>
                    <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                        Στο εταιρικό προφίλ, προσφέρεται η δημοσίευση νέας θέσης
                    </p>
                    <div className="w-full h-48 flex items-center justify-center">
                        <Image 
                        src="/home-personas-left.svg"
                        alt="person uploading a file"
                        width={100}
                        height={100}
                        className="size-4/6 object-contain cursor-pointer hover:scale-105 transition ease-in-out"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-2 w-5/6 xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-orange-300 dark:from-slate-800 dark:via-orange-300 dark:to-orange-500" />
                    <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer">
                        Αξιολόγηση Ενδιαφέροντος
                    </h3>
                    <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                        Επιπλέον, δίνεται η δυνατότητα γνωριμίας με τους υποψηφίους της θέσης
                    </p>
                    <div className="w-full h-48 flex items-center justify-center">
                        <Image 
                        src="/home-personas-right.svg"
                        alt="person searching"
                        width={100}
                        height={100}
                        className="size-4/6 object-contain cursor-pointer hover:scale-105 transition ease-in-out"
                        />
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="flex flex-col items-center lg:hidden">
            <div className="h-2 w-full md:w-5/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                    <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer">
                    Προσθήκη Πρακτικής Άσκησης
                    </h3>
                    <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                        Στο εταιρικό προφίλ, προσφέρεται η δημοσίευση νέας θέσης
                    </p>
                    <div className="w-full h-48 mt-10 flex items-center justify-center">
                        <Image 
                        src="/home-personas-left.svg"
                        alt="person uploading a file"
                        width={100}
                        height={100}
                        className="size-4/6 object-contain cursor-pointer"
                        />
                    </div>
                </div>
            <div className="flex flex-col items-center lg:hidden">
                <div className="h-2 w-full md:w-5/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center cursor-pointer">
                    Αξιολόγηση Ενδιαφέροντος
                </h3>
                <p className="mt-5 max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                    Επιπλέον, δίνεται η δυνατότητα γνωριμίας με τους υποψηφίους της θέσης
                </p>
                <div className="w-full h-48 mt-10 flex items-center justify-center">
                    <Image 
                    src="/home-personas-right.svg"
                    alt="person searching"
                    width={100}
                    height={100}
                    className="size-4/6 object-contain cursor-pointer"
                    />
                </div>
            </div>
            {/* Mobile and Desktop */}
            <div className="flex flex-col items-center size-full">
                <div className="h-2 w-full md:w-5/6 lg:w-3/6 xl:w-2/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <h3 className="mt-4 text-lg 2xl:text-xl font-medium text-center">
                    Γραφείο Πρακτικής Πανεπιστημίου
                </h3>
                <p className="mt-5 max-w-md text-center text-sm lg:text-base 2xl:text-md">
                    Διαχειριστείτε όλες τις ενδιάμεσες διαδικασίες του τμήματός σας μέσω του προσωπικού σας λογαριασμού στον ΑΤΛΑΣ.
                </p>
                <Button size="lg" className="p-4 mt-10">
                    Μάθετε περισσότερα
                </Button>
            </div>
        </div>
     );
}
 
export default Personas;