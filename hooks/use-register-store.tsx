import { RegisterStore } from "@/types";
import { create } from "zustand";

export const useRegisterStore = create<RegisterStore>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value }),
    activeTab: "type",
    setActiveTab: (value: string) => set({ activeTab: value }),
    selectedType: "",
    setSelectedType: (value: string) => set({ selectedType: value })
}))