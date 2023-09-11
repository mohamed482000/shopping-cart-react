import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BsBook ,BsSearch ,BsCart2} from "react-icons/bs";
import CartContext from '../../Context/CartContext';


function HeaderMidlle() {
  const {cartItemsLength} = useContext(CartContext)
  return (
    <div className="header-middle">
        <NavLink to='/' className="header-middle-log">
            <b>book</b>
            <BsBook />
            <b>store</b>
        </NavLink>
        <div className="header-middle-search-box">
            <input type='search' className='header-middle-search-input'
            placeholder='Search in book store...'
            />
            <BsSearch />
        </div>
        <div className="header-middle-cartWrapper">
            
        </div>
        <NavLink to='/cart' className="header-middle-cartWrapper" >
          {cartItemsLength > 0 ? <b className='cart-notification'>{cartItemsLength}</b> : ''}
          <BsCart2 />
        </NavLink>
    </div>
  )
}

export default HeaderMidlle