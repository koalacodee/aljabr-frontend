import { create } from "zustand";

export const SCREEN_TYPES = {
  SUCCESS: "SUCCESS" as const,
  FORM: "FORM" as const,
  NEW_CODE: "NEW_CODE" as const,
  TERMS: "TERMS" as const,
  FORM_LANDING: "FORM_LANDING" as const,
} as const;

type ScreenType = (typeof SCREEN_TYPES)[keyof typeof SCREEN_TYPES];

interface ScreenStoreType {
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
}
export const useScreenStore = create<ScreenStoreType>((set) => ({
  currentScreen: SCREEN_TYPES.FORM_LANDING,
  setCurrentScreen: (screen: ScreenType) => set({ currentScreen: screen }),
}));
