import { create } from "zustand";

interface GlobalState {
  searchQuery: string;
  updateSearchQuery: (query: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  searchQuery: "",
  updateSearchQuery: (query) => set({ searchQuery: query }),
}));
