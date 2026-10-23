//navbar
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (

     <header className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Edudu logo" />
        <span>Edudu</span>
      </Link>

      <nav className={`navbar__links ${open ? 'open' : ''}`}>
        <NavLink to="/courses" onClick={() => setOpen(false)}>Course</NavLink>
        <NavLink to="/teachers"  onClick={()=> setOpen(false) }>Teacher</NavLink>
        <a href="#how">How to use</a>
        <a href="#about">About Us</a>
      </nav>

      <div className="navbar__actions">
        <button className="btn-text">Sign up</button>
        <button className="btn-dark">Log in</button>
        <button className="navbar__burger" onClick={() => setOpen(!open)}>
<img src={menu} alt="menu" />   
  </button>
      </div>
    </header>
  )
}

export default Navbar