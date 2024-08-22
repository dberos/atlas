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