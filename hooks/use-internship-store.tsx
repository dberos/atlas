import { InternshipStoreType, SearchFormType } from "@/types";
import { create } from "zustand";

export const useInternshipStore = create<InternshipStoreType>((set) => ({
    data: {
        field: "",
        duration: "",
        employment: "",
        city: "",
        espa: false,
    },
    setData: (newData: Partial<SearchFormType>) => set((state: InternshipStoreType) => ({
        data: { ...state.data, ...newData }
    })),
}));