import { create } from "zustand";

type ModeType = {
    isAllowed: boolean,
    setIsAllowed: (value: boolean) => void;
}

export const useMode = create<ModeType>((set) => ({
    isAllowed: true,
    setIsAllowed: (value: boolean) => set({ isAllowed: value })
}))