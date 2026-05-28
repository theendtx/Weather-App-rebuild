type Props = {
  favorites:string[]
}

function FavoritesList({
  favorites
}:Props){

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