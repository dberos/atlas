export type UserType = {
    id: string,
    email: string,
    type: string
}

export type AuthContextType = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserType | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>
}

export type CompanyInfoType = {
    name: string,
    city: string,
    district: string,
    street: string,
    streetNumber: string
}

export type UndergraduateInfoType = {
    name: string,
    surname: string,
    university: string,
    department: string,
}