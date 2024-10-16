import { HeroType } from "@/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"  
import Image from "next/image";
import { Fragment } from "react";

const Hero = ({
    title,
    description,
    breadcrumbs,
    breadcrumbPage,
    imageSrc,
    imageAlt,
}: HeroType) => {

    return ( 
        <div className="mt-20 size-full flex flex-col lg:flex-row">
            <div className="min-h-52 w-full lg:w-3/6 lg:h-96 flex flex-col items-center justify-center gap-y-8">
                <h1 className="font-medium text-4xl lg:text-6xl font-serif text-center">
                    {title}
                </h1>
                <h3 className="font-medium text-lg lg:text-2xl max-w-lg text-center">
                    {description}
                </h3>
                <div className="-mt-4 h-2 w-full md:w-5/6 lg:w-full xl:w-4/6 bg-gradient-to-r from-slate-300 via-orange-200 to-slate-300 dark:from-slate-800 dark:via-orange-500 dark:to-slate-800" />
                <Breadcrumb className="-mt-4 w-full md:w-5/6 lg:w-full xl:w-4/6 flex justify-center md:justify-start">
                    <BreadcrumbList>
                        {
                            breadcrumbs.map((breadcrumb) => (
                                <Fragment key={breadcrumb.id}>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={breadcrumb.link}>
                                            {breadcrumb.label}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </Fragment>
                            ))
                        }
                        <BreadcrumbItem>
                        <BreadcrumbPage>
                            {breadcrumbPage}
                        </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="h-96 w-full lg:w-3/6 flex items-center justify-center">
                <Image 
                src={imageSrc}
                alt={imageAlt}
                width={100}
                height={100}
                priority
                className="size-full md:size-4/6 lg:size-5/6 object-contain"
                />
            </div>
        </div>
    );
}
 
export default Hero;