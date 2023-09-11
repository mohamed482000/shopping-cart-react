import React from 'react'
import { BsInstagram ,BsFacebook ,BsYoutube ,BsTwitter , BsTelegram } from "react-icons/bs";
function FooterSocial() {
  return (
    <div className="footer-social-media">
        <div className="footer-social-media-text">follow us on social media</div>
        <div className="footer-social-media-icons">
            <div className="footer-social-media-icon"><BsInstagram style={{color:'red'}}/></div>
            <div className="footer-social-media-icon"><BsFacebook style={{color:'#2980b9'}}/></div>
            <div className="footer-social-media-icon"><BsYoutube style={{color:'red'}}/></div>
            <div className="footer-social-media-icon"><BsTwitter style={{color:'skyblue'}}/></div>
            <div className="footer-social-media-icon"><BsTelegram style={{color:'darkblue'}}/></div>
        </div>
    </div>
  )
}

export default FooterSocial