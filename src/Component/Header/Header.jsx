import React, { useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import NavBar from './NavBar'
import './header.css'

function Header() {
  const [toggle , setToggle] = useState(false)
  return (
    <header className="header">
        <HeaderTop toggle={toggle} setToggle={setToggle}/> 
        <HeaderMiddle />
        <NavBar toggle={toggle} setToggle={setToggle}/>
    </header>
  )
}

export default Header