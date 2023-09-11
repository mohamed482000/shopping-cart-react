import React, { useContext, useState } from 'react'
import './bookSlider.css'
import { BsChevronCompactLeft ,BsChevronCompactRight ,BsFillEyeFill , BsCartPlusFill } from "react-icons/bs";
import Rating from './Rating';
import Model from '../model/Model';
import CartContext from '../../Context/CartContext';
function BookSlider({data }) {
    const {addToCart } = useContext(CartContext)
    const [slideIndex , setSlideIndex] = useState(0)
    const [openModal , setOpenModal] = useState(false)
    const [bookdata , setBookData] = useState(null)
    // handle model
     const handleModel = (book) =>{
      setOpenModal(true)
      setBookData(book)
     }
    // handle click
    const handleClick =(direction)=>{
        if (direction == "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 7)
        }else{
            setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0)
        }
    }
   
  return (
    <div className='book-slider-container' >
       <div className="book-slider-arrow-left " onClick={()=>handleClick('left')}>
        <BsChevronCompactLeft/>
        </div> 
          <div className="book-slider-wrapper" style={{transform : `translateX(${slideIndex * -340}px)`}}>
            {data.map(item => 
            <div key={item.id} className='book-slide-item'> 
                <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img' />
                <h3 className="book-slide-item-title">{item.title}</h3>
                <Rating rating={item.rating} reviews = {item.reviews}/>
                <div className="book-slide-item-price">{item.price}</div>
                <div className="book-slider-icons-wrpper">
                    <BsFillEyeFill onClick={() => handleModel(item)}/>
                    <BsCartPlusFill onClick={() =>addToCart({...item , quantity:1})}/>
                </div>
            </div>
            )}
          </div>
          <div className="book-slider-arrow-right">
            <BsChevronCompactRight onClick={()=>handleClick('right')}/>
          </div> 
          {openModal == true && <Model bookdata={bookdata}  setOpenModal={setOpenModal}/>}
          
        
    </div>
  )
}

export default BookSlider