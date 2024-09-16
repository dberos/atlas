import { optionsUndergraduate } from "@/data";
import Option from "./option";

const OptionsUndergraduate = () => {
    return ( 
        <div className="lg:mt-20 pb-10 w-full 2xl:w-5/6 flex items-center justify-center flex-col lg:flex-row gap-y-8 lg:gap-x-16 2xl:px-20">
            {
                optionsUndergraduate.map((option) => (
                    <Option 
                    key={option.id}
                    {...option}
                    />
                ))
            }
        </div>
     );
}
 
export default OptionsUndergraduate;