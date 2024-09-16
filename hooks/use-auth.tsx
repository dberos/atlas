"use client";

import { AuthContext } from "@/providers/auth-provider";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('Error');
    }
    return context;
  };