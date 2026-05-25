import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [city, setCity] = useState<any>(null);
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    async function fetchWeather() {
        try {

            setLoading(true);
            setError("");

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

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

    return (
        <>
          <Header />

          <SearchInput
           city={city}
           setCity={setCity} />

           <button
           onClick={fetchWeather}
           >Search</button>

          <WeatherCard
           weather={weather}
           loading={loading}
           error={error}
          />
        </>
    );
}

export default App;