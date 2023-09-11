import React, { useState } from 'react'
import CartContext from './CartContext'

function CartProvider({children}) {
    const [cartItems , setCartItems] = useState([])

    //add to cart 
    const addToCart = (item) =>{
        const isExist = cartItems.find((cart) => cart.id === item.id)
        if(isExist){
            const filtered = cartItems.filter((cart) => cart.id !== isExist.id)
            setCartItems(filtered)
            setCartItems(prev => [...prev , item])
        }else{
            setCartItems(prev => [...prev , item])
        }
    }
    // remove from Cart
    const removeFromCart = (id)=>{
        const cart = cartItems.filter(c => c.id !== id)
        setCartItems(cart)
    }
  return (
    <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength:cartItems.length,
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider