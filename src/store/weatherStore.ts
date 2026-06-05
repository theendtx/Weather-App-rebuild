import { create } from "zustand";
import { persist } from "zustand/middleware";

type WeatherStore = {
  favorites: string[];
  recentSearches: string[];

  addFavorite: (city: string) => void;
  addRecentSearch: (city: string) => void;
};

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      favorites: [],
      recentSearches: [],

      addFavorite: (city) =>
        set((state) => ({
          favorites: [...state.favorites, city]
        })),

      addRecentSearch: (city) =>
        set((state) => ({
          recentSearches: [...state.recentSearches, city]
        }))
    }),
    {
      name: "weather-storage"
    }
  )
);