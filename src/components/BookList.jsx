import React, { useEffect, useState } from 'react'
import {API_URL} from '../data.js'
import axios from 'axios'
import {useAppContext} from './context/AppContext'
import {useNavigate} from 'react-router-dom'
const BookList = () => {
    const [books , setBooks] = useState([]);

    const {favorites , addToFavorites , removeFromFavorites} = useAppContext();

    const navigate = useNavigate();


const favoritesChecker =(id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
}
    useEffect(() =>{
        axios.get(API_URL)
        .then((res) => {
            console.log(res.data);
            setBooks(res.data)
        }).catch((err) => console.log(err))

    },[])
  return (
    <div className="home" style={{marginTop:'100px', textAlign:'center'}}>
    <h2 style={{width:'70%', margin:'auto'}}>" Gabriel.s small cottage was lit by a single candle that cast light on a collection of weapons along one wall and a few books on a bookshelf on another "</h2>
    <div className='book-list'>
    {books.map((book) => (
        <div key={book.id} className="book">
            
            <div>
                <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)}></img>
            </div>
            <div>
                <h1>{book.title}</h1>
            </div>
        <div>
        {favoritesChecker(book.id) ? (
                    <button onClick= {() => removeFromFavorites(book.id)}>remove 
                    From Favorites</button>

        )

      : (
                    <button onClick= {() => addToFavorites(book)}>Add To Favorites</button>

      ) }
        </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default BookList
