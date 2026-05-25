import { useState } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [city, setCity] = useState<any>(null);
    const [weather, setWeather] = useState<any>(null);
    async function fetchWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        
        const data = await response.json();

        setWeather(data);
    }

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
          />
        </>
    );
}

export default App;