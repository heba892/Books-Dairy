import React from 'react'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import BookList from './components/BookList'
import Favourites from './components/Favourites'
import BookDetails from './components/BookDetails'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='App'>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<BookList></BookList>}></Route>
        <Route path='/favorites' element={<Favourites></Favourites>}></Route>
        <Route path='/books/:id' element={<BookDetails></BookDetails>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  )
}

export default App
