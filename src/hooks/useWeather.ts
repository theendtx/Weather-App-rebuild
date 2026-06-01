import { useState } from "react";
import type { Weather } from "../types/weather";
import type { ForecastItem } from "../types/forecast";

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  return {
    weather,
    setWeather,

    loading,
    setLoading,

    error,
    setError,

    forecast,
    setForecast,

    recentSearches,
    setRecentSearches
  };
}