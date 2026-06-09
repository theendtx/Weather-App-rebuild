
import { useWeatherStore } from "../store/weatherStore";

function FavoritesList(){

  const favorites = useWeatherStore(state => state.favorites);

  return(

    <div className="mini-panel">

      <h3>Favorites</h3>

      {favorites.length === 0 && <p className="muted-text">No favorites yet</p>}

      <div className="chip-list">
      {favorites.map(city => (

        <p className="city-chip" key={city}>
          {city}
        </p>

      ))}
      </div>

    </div>

  )

}

export default FavoritesList;
