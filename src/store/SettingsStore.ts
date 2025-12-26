import { create } from "zustand/react";
import { persist } from "zustand/middleware/persist";

interface ISettingsState {
  darkMode: boolean;
}

export const useSettings = create(
  persist<ISettingsState>(
    (set) => ({
      darkMode: false,
      setDarkMode: (value: boolean) => set({ darkMode: value }),
    }),
    { name: "settings-storage" },
  ),
);
