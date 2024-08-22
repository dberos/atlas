"use client";

import { AuthContext } from "@/providers/auth-provider";
import { AuthContextType } from "@/types";
import { useContext } from "react";

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };