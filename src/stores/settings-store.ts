import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserPreferences } from "@/types/domain";
import { DEFAULT_PREFERENCES } from "@/lib/constants";

interface SettingsState {
  preferences: UserPreferences;
  dailyGoal: number;
  /** 用户昵称 */
  nickname: string;
  setPreferences: (prefs: Partial<UserPreferences>) => void;
  setDailyGoal: (goal: number) => void;
  setNickname: (name: string) => void;
  reset: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      preferences: DEFAULT_PREFERENCES,
      dailyGoal: 20,
      nickname: "",

      setPreferences: (prefs) =>
        set((s) => ({ preferences: { ...s.preferences, ...prefs } })),

      setDailyGoal: (goal) => set({ dailyGoal: goal }),

      setNickname: (name) => set({ nickname: name }),

      reset: () =>
        set({
          preferences: DEFAULT_PREFERENCES,
          dailyGoal: 20,
          nickname: "",
        }),
    }),
    { name: "eg-math-settings" }
  )
);
