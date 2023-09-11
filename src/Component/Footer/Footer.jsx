import React from 'react'
import './footer.css'
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';
import FooterInfo from './FooterInfo';
import FooterAbout from './FooterInfo';

function  Footer() {
  return (
    <footer className='footer'>
        <FooterSocial />
        <div className="footer-links-wrapper">
        <FooterLinks />
        <FooterInfo />
        <FooterAbout />
        </div>
    </footer>
  )
}

export default  Footer