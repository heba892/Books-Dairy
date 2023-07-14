import {React , useState , useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {BOOKS_DETAILS_URL} from '../data.js'
import '../App.css'
const BookDetails = () => {
  const [book , setBook] = useState({})
  const {id} = useParams()

  useEffect(() =>{
    axios.get(`${BOOKS_DETAILS_URL}/${id}`)
    .then((res) =>{
      setBook(res.data);
    }).catch((err) => console.log(err))
  },[id])
  return (
    <div className="book-details">
      <div className="book-image">
      

      <img src={book?.image_url} alt="#"></img>
            <h2>{book?.title}</h2>

      </div>

        <div className="book-poster">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Author</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
        
        </div>

    </div>
  )
}

export default BookDetails
