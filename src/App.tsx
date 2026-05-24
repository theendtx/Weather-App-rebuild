import { useState } from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [city, setCity] = useState<string>("");

    return (
        <>
          <Header />
          <SearchInput
           city={city}
           setCity={setCity} />
          <WeatherCard
           city={city}
           temp={23}
          />
        </>
    );
}

export default App;