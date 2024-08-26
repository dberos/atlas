"use client";

import { useToast } from "@/components/ui/use-toast";
import { useModeStore } from "@/hooks/use-mode-store";
import { findUserBySession } from "@/server/find-user";
import { AuthContextType, UserType } from "@/types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null | undefined>(null);
  const isAllowed = useModeStore((state) => state.isAllowed);
  const { toast } = useToast();

  useEffect(() => {
    const findUser = async() => {
        try {
            const userObj = await findUserBySession();
            if (userObj) {
                setUser(userObj);
                setIsLoggedIn(true);
            }
            else {
                setUser(null);
                if (window.localStorage.getItem('session')) {
                    toast({
                        title: "Η συνεδρία έληξε, συνδεθείτε ξανά στον λογαριασμό σας!",
                    })
                    window.localStorage.clear();
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    isAllowed && findUser();
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};