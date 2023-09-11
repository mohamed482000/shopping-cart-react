import React from 'react'
import './contact.css'
import { BsHouseFill , BsPhoneFill ,BsEnvelopeAtFill} from "react-icons/bs";

function Contact() {
  return (
    <section className='contact'>
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <BsHouseFill />
            Address
          </div>
          <p className="contact-item-text">
            Egypt-Cairo-Ain Shams
          </p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <BsPhoneFill />
            Phone
          </div>
          <p className="contact-item-text">
            123-456-789
          </p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <BsEnvelopeAtFill />
            Email
          </div>
          <p className="contact-item-text">
            info@fakeemail.com
          </p>
        </div>
      </div>
      <form  className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder='Name *'/>
          <input type="subject" placeholder='Subject *'/>
          <input type="email" placeholder='Email *'/>
        </div>
          <textarea placeholder='Your Massege *' rows="5"></textarea>
          <button className="contact-btm">Send</button>
      </form>
    </section>
  )
}

export default Contact