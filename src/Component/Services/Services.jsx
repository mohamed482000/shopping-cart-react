import React from 'react'
import './services.css'
import { BsFillSendFill ,BsGift  ,BsTruck ,BsArrowClockwise} from "react-icons/bs";
function Services() {
  return (
    <div className='services'>
        <div className="services-item">
            <BsTruck />
            <b>Free Shipping</b>
        </div>
        <div className="services-item">
            <BsGift />
            <b>Gift Card</b>
        </div>
        <div className="services-item">
            <BsArrowClockwise />
            <b>7 Days Return</b>
        </div>
        <div className="services-item">
            <BsFillSendFill />
            <b>Contact US</b>
        </div>
    </div>
  )
}

export default Services