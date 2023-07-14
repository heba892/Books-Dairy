import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
    <div><Link to="/"><h1>Books Diary</h1></Link></div>
    <div><Link to="/favorites"><h1>Your Favorites</h1></Link></div>
      
    </div>
  ) 
}

export default NavBar
