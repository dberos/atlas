import { LoginStore } from "@/types";
import { create } from "zustand";

export const useLoginStore = create<LoginStore>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value })
}))