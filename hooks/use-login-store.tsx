import { LoginStoreType } from "@/types";
import { create } from "zustand";

export const useLoginStore = create<LoginStoreType>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value })
}))