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

function App() {
    const [city ] = useState("");

    const recentSearches =
  useWeatherStore(
    state => state.recentSearches
  );

const addRecentSearch =
  useWeatherStore(
    state => state.addRecentSearch
  );

const { data, isLoading, error} = useQuery({
  queryKey: ["weather", city],
  queryFn: () => getWeather(city),
  enabled: !!city
})
    const favorites = useWeatherStore(state => state.favorites);

    const addFavorite = useWeatherStore(state => state.addFavorite);

    function toggleFavorite() {
  if (!favorites.includes(city)) {
    addFavorite(city);
  }
}
    useEffect(() => {
  if (city) {
    addRecentSearch(city);
  }
}, [city]);


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
            />

           <button onClick={toggleFavorite}>
            favorite
           </button>

           <button
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
  forecast={
    data?.list
      ?.filter((item:any) =>
        item.dt_txt.includes("12:00:00")
      )
      .slice(0, 5) ?? []
  } /> </>


    );
}

export default App;
