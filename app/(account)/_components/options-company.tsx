import { optionsCompany } from "@/data";
import Option from "./option";

const OptionsCompany = () => {
    return ( 
        <div className="lg:mt-20 pb-10 w-full 2xl:w-5/6 flex items-center justify-center flex-col lg:flex-row gap-y-8 lg:gap-x-16">
            {
                optionsCompany.map((option) => (
                    <Option 
                    key={option.id}
                    {...option}
                    />
                ))
            }
        </div>
    );
}
 
export default OptionsCompany;