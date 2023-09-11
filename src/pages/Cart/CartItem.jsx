import React, { useContext } from 'react'
import { BsPlusLg ,BsDashLg ,BsTrashFill} from "react-icons/bs";
import CartContext from '../../Context/CartContext';

function CartItem({item}) {
    const {image , title , author , price , quantity} = item
    const {addToCart , removeFromCart } = useContext(CartContext)
  return (
    <div  className='cart-item'>
        <img src={`/books/${image}`} alt={title} className="cart-item-img" />
        <div className="cart-item-info">
        <div>
            <div className="cart-item-book-title"><b>Title</b> {title}</div>
            <div className="cart-item-author"><b>author:</b> {author}</div>
        </div>
        <div>
            <div className="cart-item-quantity">
            <button onClick={() => addToCart({...item , quantity:item.quantity + 1})}>
                <BsPlusLg />
            </button>
            <b>{quantity}</b>
            <button disabled={item.quantity <= 1} onClick={() => addToCart({...item , quantity:item.quantity - 1})}>
                <BsDashLg />
            </button>
            </div>
            <div className="cart-items-price">
            ${(price * quantity).toFixed(2)}
            </div>
            <BsTrashFill onClick={() => removeFromCart(item.id)} />
        </div>
        </div>
    </div>
  )
}

export default CartItem