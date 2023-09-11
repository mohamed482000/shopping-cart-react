import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({setToggle , toggle}) {
  return (
    <nav style={{left : toggle && '0'}} className='navbar'>
        <ul className="navbar-links">
            <NavLink to='/' className="navbar-link" onClick={() => setToggle(false)}>Home</NavLink>
            <NavLink to='/authors' className="navbar-link" onClick={() => setToggle(false)}>Authors</NavLink>
            <NavLink to='/about' className="navbar-link" onClick={() => setToggle(false)}>About Us</NavLink>
            <NavLink to='/contact' className="navbar-link" onClick={() => setToggle(false)}>Contact Us</NavLink>
            <NavLink to='/register' className="navbar-link" onClick={() => setToggle(false)}>Register</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar