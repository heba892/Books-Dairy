import React from 'react'
import '../App.css'
import {useAppContext} from './context/AppContext'

const Favourites = () => {

  const {favorites , addToFavorites , removeFromFavorites} = useAppContext();

    console.log("favorites are " , favorites)

const favoritesChecker =(id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
}
  return (



<>
    <div className='book-list'>
    {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className="book">
            
            <div>
                <img src={book.image_url} alt="#"></img>
            </div>
            <div>
                <h2>{book.title}</h2>
            </div>
        <div>
        {favoritesChecker(book.id) ? (
                    <button onClick= {() => removeFromFavorites(book.id)}>remove To Favorites</button>

        )

      : (
                    <button onClick= {() => addToFavorites(book)}>Add To Favorites</button>

      ) }
        </div>
        </div>
    )):<h1 style={{width:'70%', margin:'auto', textAlign:'center'}}>You Dont Have Favorite Books Yet!</h1>}
    </div>
    </>











    
  )
}

export default Favourites
