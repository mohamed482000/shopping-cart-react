import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLinks() {
  return (
    
    <div className="footer-links-item">
        <h3 className="footer-links-item-title">
            Usefull Links
        </h3>
        <ul className="footer-links">
          <li><NavLink to='/' className="footer-link">Home</NavLink></li>
          <li><NavLink  to='/authors' className="footer-link">Authors</NavLink></li>
          <li><NavLink to='/about' className="footer-link">About Us</NavLink></li>
          <li><NavLink to='/contact' className="footer-link">contact US</NavLink></li>
          <li><NavLink to='/register' className="footer-link">Register</NavLink></li>
        </ul>
    </div>
  )
}

export default FooterLinks