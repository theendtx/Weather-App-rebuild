import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useWeatherStore } from "./store/weatherStore";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./services/weatherService";
import "./App.css";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CityPage from "./pages/CityPage";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import  FavoritesList  from "./components/FavoritesList";
import RecentSearches from "./components/RecentSearches";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [city, setCity] = useState("");

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
        
        <div className="app-shell">

        <BrowserRouter>
          <nav className="top-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to={city ? `/city/${city}` : "/"}>City</Link>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/favorites" element={
              <ProtectedRoute>
                <FavoritesPage />
              </ProtectedRoute>
            } />

            <Route path="/city/:name" element={<CityPage />} />

          </Routes>

        </BrowserRouter>

        <main className="weather-layout">
          <section className="hero-panel">
            <Header />
            <p className="hero-copy">
              Clean forecasts, favorite cities, and the next few days at a glance.
            </p>

            <div className="search-panel">
              <SearchInput city={city} setCity={setCity} />

              <button className="ghost-button" onClick={toggleFavorite}>
                Save city
              </button>
            </div>
          </section>

          <section className="content-grid">
            <div className="primary-column">
              <WeatherCard
                weather={data}
                loading={isLoading}
                error={error?.message ?? ""}
              />

              <section className="forecast-section">
                <div className="section-heading">
                  <span>5 day rhythm</span>
                  <h2>Forecast</h2>
                </div>

                <ForecastList
                  forecast={
                    data?.list
                      ?.filter((item:any) =>
                        item.dt_txt.includes("12:00:00")
                      )
                      .slice(0, 5) ?? []
                  }
                />
              </section>
            </div>

            <aside className="side-column">
              <FavoritesList />
              <RecentSearches
                searches={recentSearches}
              />
            </aside>
          </section>
        </main>
      </div>


    );
}

export default App;
