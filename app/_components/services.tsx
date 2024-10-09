import { services } from "@/data";
import Service from "./service";

const Services = () => {
    return ( 
        <div className="h-[130vh] md:h-screen lg:h-96 xl:h-80 w-full 2k:w-5/6 mt-20 lg:mt-10 rounded-lg lg:bg-slate-200 lg:dark:bg-slate-900">
            <div className="w-full h-10 flex items-center justify-center lg:justify-end">
                <p className="border-dashed border-2 p-2 lg:border-0 lg:p-0 border-indigo-500 text-base lg:text-sm font-medium lg:mr-5">
                    Τι προσφέρει ο ΆΤΛΑΣ;
                </p>
            </div>
            <div className="mt-4 lg:mt-0 size-full grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-x-4">
                {
                    services.map((service) => (
                        <Service 
                        key={service.id}
                        {...service}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Services;