import { SearchFormSchema } from "@/schemas"
import { z } from "zod"

export type ServiceType = {
    id: number,
    title: string,
    description: string,
    imageSrc: string,
    imageAlt: string
}

export type UserType = {
    id: string,
    email: string,
    type: string,
    name?: string | undefined
}

export type AuthContextType = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserType | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>
}

export type CompanyInfoType = {
    companyId?: string | undefined
    name: string,
    city: string,
    district: string,
    street: string,
    streetNumber: string
}

export type UndergraduateInfoType = {
    undergraduateId?: string | undefined
    name: string,
    surname: string,
    university: string,
    department: string,
}

export type CityType = {
    id: number,
    value: string
}

export type UniversityType = {
    id: number,
    value: string
}

export type DepartmentType = {
    id: number,
    value: string
}

export type FieldType = {
    id: number,
    name: string
}

export type ModeType = {
    isAllowed: boolean,
    setIsAllowed: (value: boolean) => void;
}

export type LoginStoreType = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    redirectUrl: string | null,
    setRedirectUrl: (value: string | null) => void
}

export type RegisterStoreType = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    activeTab: string,
    setActiveTab: (value: string) => void,
    selectedType: string,
    setSelectedType: (value: string) => void,
    undergraduate: UndergraduateInfoType,
    setUndergraduate: (value: UndergraduateInfoType) => void,
    company: CompanyInfoType,
    setCompany: (value: CompanyInfoType) => void
}

export type MobileMenuStoreType = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

export type BreadcrumbType = {
    id: number,
    link: string,
    label: string
}

export type HeroType = {
    title: string,
    description: string,
    breadcrumbs: BreadcrumbType[],
    breadcrumbPage: string,
    imageSrc: string,
    imageAlt: string,
}

export type OptionType = {
    id: number,
    title: string,
    imageSrc: string,
    imageAlt: string,
    link: string
}

export type HandleProtectRouteType = {
    redirectUrl: string | null;
    user: UserType | null | undefined,
    setIsOpen: (value: boolean) => void;
    setRedirectUrl: (value: string | null) => void;
    callback: () => void;
}

export type SearchFormType = z.infer<typeof SearchFormSchema>;

export type InternshipStoreType = {
    data: SearchFormType;
    setData: (data: Partial<SearchFormType>) => void;
};

export type InternshipCompanyType = {
    id: string,
    userId: string,
    name: string,
    city: string,
    district: string,
    street: string,
    streetNumber: string
}

export type InternshipType = {
    id: string,
    title: string,
    field: string,
    duration: string,
    employment: string,
    espa: boolean,
    salary: string,
    description: string,
    companyId: string,
    company: InternshipCompanyType
    undergraduateId?: any,
    undergraduate?: any
}

export type SearchCookieType = {
    field: string,
    duration: string,
    employment: string
    espa?: boolean | undefined 
}

export type SavedInterestType = {
    id: string,
    internshipId: string,
    undergraduateId: string
}