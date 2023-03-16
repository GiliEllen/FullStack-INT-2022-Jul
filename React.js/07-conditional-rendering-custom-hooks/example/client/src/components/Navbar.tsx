import React from 'react'
import {NavLink, Link} from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
    </nav>
  )
}

export default Navbar