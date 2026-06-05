
import { useWeatherStore } from "../store/weatherStore";

function FavoritesList(){

  const favorites = useWeatherStore(state => state.favorites);

  return(

    <div>

      <h3>
        Favorites
      </h3>

      {favorites.map(city => (

        <p key={city}>
          {city}
        </p>

      ))}

    </div>

  )

}

export default FavoritesList;