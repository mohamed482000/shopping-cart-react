import React, { useContext } from 'react'
import OrderSummary from './OrderSummary';
import './cart.css'
import CartItem from './CartItem';
import CartContext from '../../Context/CartContext';

function Cart() {
  const {cartItems  } = useContext(CartContext)

  const totlaBrice =cartItems.reduce((acc , cur)  => acc + cur.price *cur.quantity , 0  )
  return (
    <div className="cart">
      <div className="cart-title">
        Your Shopping Cart
      </div>
      <div className="cart-wrapper">
          <div className="cart-items">
             {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
          </div>
          <OrderSummary totlaBrice={totlaBrice} />
          
      </div>
    </div>
  )
}

export default Cart