import React, { useState } from 'react'
import './slider.css'
import FirstBook from '../../images/book1.png'
import SecondBook from '../../images/book2.png'
import ThirdBook from '../../images/book3.png'
import { BsChevronDoubleLeft ,BsChevronDoubleRight} from"react-icons/bs";


function Slider() {
   const [slideIndex , setSlideIndex] = useState(0)
   const handleClick = (direction)=>{
    if (direction === 'left') {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
   }
  return (
    <div className="slider-container">
        <div className='arrow-left' onClick={() =>handleClick('left')}><BsChevronDoubleLeft size={30}/></div>
        <div className='arrow-right' onClick={() =>handleClick('right')}><BsChevronDoubleRight size={30}/></div>
        
        <div className="slider-wrapper" style={{transform : `translateX(${slideIndex *-100}vw)`}}>
            <div className="slide first-slide">
                <div className="slide-img-wrapper">
                    <img src={FirstBook} alt="firstBook" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Book Store</h1>
                    <p className="slide-info-desc">it's not just reading . it's living the adventure</p>
                </div>
            </div>
            <div className="slide second-slide">
                <div className="slide-img-wrapper">
                    <img src={SecondBook} alt="firstBook" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">The Books For Every One</h1>
                    <p className="slide-info-desc">you can read at home or at the book store.</p>
                </div>
            </div>
            <div className="slide third-slide">
                <div className="slide-img-wrapper">
                    <img src={ThirdBook} alt="firstBook" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">Check Out The New Titles</h1>
                    <p className="slide-info-desc">we send the book youwant at home.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
