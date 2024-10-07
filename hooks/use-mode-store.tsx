import { ModeType } from "@/types";
import { create } from "zustand";

export const useModeStore = create<ModeType>((set) => ({
    isAllowed: false,
    setIsAllowed: (value: boolean) => set({ isAllowed: value })
}))