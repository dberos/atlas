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
    setIsOpen: (value: boolean) => void
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