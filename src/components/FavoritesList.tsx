import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoritesList(){

  const favorites = useContext(FavoritesContext);

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