import { MobileMenuStoreType } from "@/types";
import { create } from "zustand";

export const useMobileMenuStore = create<MobileMenuStoreType>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value })
}))