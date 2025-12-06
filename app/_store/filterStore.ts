import { create } from "zustand";
import type { Selection } from "@heroui/react";

type FilterStoreState = {
  province: Selection;
  city: Selection;
  specialty: Selection;
  experience: Selection;
};

type Actions = {
  setProvince: (v: Selection) => void;
  setCity: (v: Selection) => void;
  setSpecialty: (v: Selection) => void;
  setExperience: (v: Selection) => void;
};

export const useFilterStore = create<FilterStoreState & Actions>((set) => ({
  province: new Set(["همه"]),
  setProvince: (v) => set({ province: v }),

  city: new Set(["همه"]),
  setCity: (v) => set({ city: v }),

  specialty: new Set(["همه"]),
  setSpecialty: (v) => set({ specialty: v }),

  experience: new Set(["همه"]),
  setExperience: (v) => set({ experience: v }),
}));
