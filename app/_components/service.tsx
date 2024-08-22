import Image from "next/image";

const Service = ({
    title,
    description,
    imgSrc,
    imgAlt
}: {
    title: string,
    description: string,
    imgSrc: string,
    imgAlt: string
}) => {
    return ( 
        <div className="grid [grid-template-rows:1fr_1.5fr] grid-cols-1">
            <div className="flex flex-col items-center gap-y-3 lg:gap-y-6">
                <h3 className="lg:h-16 xl:h-auto text-lg 2xl:text-xl font-medium text-center">
                    {title}
                </h3>
                <p className="max-w-sm text-center text-sm lg:text-base 2xl:text-md">
                    {description}
                </p>
            </div>
            <div className="w-full h-36 md:h-44 xl:h-36 flex items-center justify-center">
                <Image 
                src={imgSrc}
                alt={imgAlt}
                width={100}
                height={100}
                className="size-full lg:size-4/6 xl:size-5/6 object-contain"
                priority
                />
            </div>
        </div>
     );
}
 
export default Service;