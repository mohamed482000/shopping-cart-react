import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { books } from '../../data/books'
import Rating from '../../Component/BookSlider/Rating';
import {BsCartPlus ,BsFileEarmarkBreakFill ,BsGlobe,BsCalendar3} from  "react-icons/bs"
import './book.css'
import CartContext from '../../Context/CartContext';

function Book() {
  const {addToCart} =useContext(CartContext)


  const {id} = useParams();
  const book = books.find(b => b.id == id)

  const [qty,setQty] = useState(1)

  return (
    <div className='book'>
      <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title}  className='book-content-img'/>
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-authors">
            by <span>{book.author}</span>(author)

          </div>
          <Rating rating={book.rating} reviews={book.reviews}/>
          <div className="book-add-to-cart">
            <input min='1' max='100' type="number" className='book-add-to-cart-input'
             value={qty}
             onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart({...book , quantity:qty})} className="book-add-to-cart-btn">
              <BsCartPlus />
              Add To Cart
            </button>
          </div>
        </div>

      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatum perferendis culpa accusantium, ut quod nobis vel illum dicta qui et mollitia soluta incidunt quos doloribus autem illo numquam error . Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla maxime praesentium nesciunt, esse facere ea, ad enim voluptatem minima cupiditate quasi commodi dolor non vitae porro quidem itaque corrupti.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print length</small>
          <BsFileEarmarkBreakFill/>
          <b>{book.printLength}</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <BsGlobe/>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>publication data</small>
          <BsCalendar3/>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  )
}

export default Book  