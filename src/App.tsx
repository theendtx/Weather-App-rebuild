import { useState } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [city, setCity] = useState<string>("");
    const [temp, setTemp] = useState<number | null>(null);

    async function fetchWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        
        const data = await response.json();

        setTemp(data.main.temp);
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
           city={city}
           temp={temp ?? 0}
          />
        </>
    );
}

export default App;