import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
    return (
        <>
          <Header />
          <SearchInput />
          <WeatherCard
           city="Almaty"
           temp={23}
          />
        </>
    );
}

export default App;