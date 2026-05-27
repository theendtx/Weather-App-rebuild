function FavoritesList({

 favorites

}:{

 favorites:string[]

}){

 return(

 <div>

 {

 favorites.map(
 city=>(

  <p
   key={city}
  >

   {city}

  </p>

 ))

 }

 </div>

 )

}

export default FavoritesList;