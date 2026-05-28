import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import  FavoritesList  from "./components/FavoritesList";

function App() {
    const [city, setCity] = useState<any>(null);
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [forecast, setForecast] = useState<any>([]);
    const [favorites, setFavorites] = useState<string[]>([]);

    function toggleFavorite(){
        if (favorites.includes(city)){
            setFavorites(
                favorites.filter(
                    item =>
                        item !== city
                )
            );
        } else {
            setFavorites(
                [...favorites, city]
            );
        }
    }

    async function fetchWeather() {
        try {

            setLoading(true);
            setError("");

            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }
            const dailyForecast =
 data.list.filter(
  (item:any) =>
   item.dt_txt.includes(
    "12:00:00"
   )
 ).slice(0,5);

setForecast(
 dailyForecast
);

            setWeather(data);

        } catch (err: any) {
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

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");

        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <>
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
           favorites={favorites}
           />

          <WeatherCard
           weather={weather}
           loading={loading}
           error={error}
          />

          <ForecastList
          forecast={forecast}/>
        </>
    );
}

export default App;