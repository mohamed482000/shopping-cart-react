import React from 'react'
import {BsFillStarFill ,BsStar ,BsStarHalf} from "react-icons/bs";
function Rating({rating , reviews}) {
  return (
    <div className="rating">
        {rating >= 1 ? <BsFillStarFill />: rating >= 0.5 ? <BsStarHalf />  : <BsStar/>}
        {rating >= 2 ? <BsFillStarFill />: rating >= 1.5 ? <BsStarHalf />  : <BsStar/>}
        {rating >= 3 ? <BsFillStarFill />: rating >= 2.5 ? <BsStarHalf />  : <BsStar/>}
        {rating >= 4 ? <BsFillStarFill />: rating >= 3.5 ? <BsStarHalf />  : <BsStar/>}
        {rating >= 5 ? <BsFillStarFill />: rating >= 4.5 ? <BsStarHalf />  : <BsStar/>}
        <span >{rating}</span>
        <span >({reviews}reviews)</span>
    </div>
  )
}

export default Rating