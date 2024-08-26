import { CompanyInfoType, RegisterStoreType, UndergraduateInfoType } from "@/types";
import { create } from "zustand";

export const useRegisterStore = create<RegisterStoreType>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => set({ isOpen: value }),
    activeTab: "type",
    setActiveTab: (value: string) => set({ activeTab: value }),
    selectedType: "",
    setSelectedType: (value: string) => set({ selectedType: value }),
    undergraduate: {
        name: '',
        surname: '',
        university: '',
        department: ''
    },
    setUndergraduate: (value: UndergraduateInfoType) => set({ undergraduate: value }),
    company: {
        name: '',
        city: '',
        district: '',
        street: '',
        streetNumber: ''
    },
    setCompany: (value: CompanyInfoType) => set({ company: value })
}))