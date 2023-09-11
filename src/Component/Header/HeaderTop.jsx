import React from 'react'
import { BsList , BsFillPersonFill ,BsTelephoneFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
function HeaderTop({toggle ,  setToggle}) {
  return (
    <div className="header-top">
        <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
            {toggle == true ?<FaXmark /> : <BsList />}
        </div>
        <div className="header-top-phone">
            <BsTelephoneFill />
            123-456-789
        </div>
        <div className="header-top-text">
            Welcome To Online Book Store
        </div>
        <NavLink to='login' className="header-top-link">
            <BsFillPersonFill />
            Login
        </NavLink>
    </div>
  )
}

export default HeaderTop