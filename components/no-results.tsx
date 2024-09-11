import Image from "next/image";

const NoResults = ({text}: { text: string }) => {
    return ( 
        <>
        <div className="lg:hidden w-full flex flex-col">
            <div className="flex items-center justify-center h-20">
                <h3 className="text-lg font-medium text-center">
                    {text}...
                </h3>
            </div>
            <div className="flex items-center justify-center h-80">
                <Image 
                src='/internships-empty.svg'
                alt='man looking the void'
                width={100}
                height={100}
                priority
                className="size-5/6 object-contain"
                />
            </div>
        </div>
        <div className="hidden h-96 lg:grid grid-cols-2 grid-rows-1">
        <div className="flex items-center justify-center">
            <Image 
            src='/internships-empty.svg'
            alt='man looking the void'
            width={100}
            height={100}
            priority
            className="size-5/6 object-contain"
            />
        </div>
        <div className="flex items-center justify-center">
            <h3 className="text-lg xl:text-2xl font-medium text-center">
                ...{text}
            </h3>
        </div>
        
    </div>
    </>
    );
}
 
export default NoResults;