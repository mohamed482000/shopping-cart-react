import React, { useContext, useState } from 'react'
import './model.css'
import { BsXCircleFill ,BsCartPlus } from "react-icons/bs";
import Rating from '../BookSlider/Rating'
import { NavLink } from 'react-router-dom';
import CartContext from '../../Context/CartContext';

function Model({bookdata , setOpenModal}) {
    const {id ,image , title , inStock , rating  , reviews ,author , price} = bookdata
    
    const [qty , setQty] = useState(1)
    const {addToCart} =useContext(CartContext)
    
  return (
    <div className="modal-container" onClick={()=>setOpenModal(false)}>
        <div onClick={(e) => e.stopPropagation()} className="modal-content " >
            <div className="model-icon"><BsXCircleFill onClick={() => setOpenModal(false)}/></div> 
            <div className="model-content-img">
                <img src={`books/${image}`} alt={title} />
            </div>
            <div className="modal-content-info">
                <h5 className="modal-content-info-title">{title}</h5>
                <div className="model-content-info-stock">
                    <b>Status :{inStock ? 'in Stock' : 'Not In Stock'} </b>
                </div>
                <Rating rating={rating} reviews={reviews}/>
                <div className="model-content-info-author">
                    <b>Author : </b>{author}
                </div>
                <div className="model-content-info-price">
                    <b>price : </b>${price}
                </div>
                <div className="model-add-to-cart">
                    <input value={qty} onChange={(e) => setQty(e.target.value)} type='number' min='1' max='100' className='model-add-to-cart-input' />
                    <button onClick={() => addToCart({...bookdata , quantity:qty})} className='model-add-to-cart-btn' >
                        <BsCartPlus />
                        Add To Cart
                    </button>
                </div>
                <NavLink to={`/Book/${id}`}  className="modal-content-info-link">
                    See More Details
                </NavLink>
                
            </div>
            
        </div>
    </div>
  )
}

export default Model