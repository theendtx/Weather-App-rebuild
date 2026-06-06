import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useWeatherStore } from "./store/weatherStore";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./services/weatherService";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CityPage from "./pages/CityPage";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import  FavoritesList  from "./components/FavoritesList";
import RecentSearches from "./components/RecentSearches";
import { useWeather } from "./hooks/useWeather";

function App() {
    const [city, setCity] = useState("");
   const {
  weather,
  setWeather,

  loading,
  setLoading,

  
  setError,

  forecast,
  setForecast,

  recentSearches,
  setRecentSearches
} = useWeather();

const { data, isLoading, error} = useQuery({
  queryKey: ["weather", city],
  queryFn: () => getWeather(city),
  enabled: !!city
})
    const favorites = useWeatherStore(state => state.favorites);

    const addFavorite = useWeatherStore(state => state.addFavorite);

    function toggleFavorite(){
        addFavorite(city);
    }

   async function fetchWeather() {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    const dailyForecast = data.list
      .filter((item:any) => item.dt_txt.includes("12:00:00"))
      .slice(0, 5);

    setForecast(dailyForecast);

    setWeather(data.list[0]);

    setRecentSearches(prev => {
      if (prev.includes(city)) {
        return prev;
      }

      return [city, ...prev].slice(0, 5);
    });

  } catch (err:any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

    useEffect(() => {
        const timer = setTimeout(() => {
            if (city) {
                fetchWeather();
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [city]);

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    }, [favorites])

    return (
        
        <>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/favorites" element={<FavoritesPage />} />

            <Route path="/city/:name" element={<CityPage />} />

          </Routes>

          <Link to="/">Home</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/city">City</Link>

        </BrowserRouter>

        

          <Header />

          <SearchInput
           city={city}
           setCity={setCity} />

           <button onClick={toggleFavorite}>
            favorite
           </button>

           <button
           onClick={fetchWeather}
           >Search</button>

           <FavoritesList
           
           />

          <WeatherCard
  weather={data}
  loading={isLoading}
  error={error?.message ?? ""}
/>

          <RecentSearches 
          searches={recentSearches}/>

          <ForecastList
          forecast={forecast}/>
        </>
    );
}

export default App;
