import React from 'react'
import { BsGeoAltFill ,BsTelephoneFill ,BsEnvelopeFill} from "react-icons/bs";
function FooterInfo() {
  return (
    <div className="footer-links-item">
        <h3 className="footer-links-item-title">
            Contact Information
        </h3>
        <div className="footer-address-wrapper">
            <div className="footer-address-item">
                <BsGeoAltFill />
                Egypt - Cairo - Ain Shams
            </div>
            <div className="footer-address-item">
                <BsTelephoneFill />
                123-456-789
            </div>
            <div className="footer-address-item">
                <BsEnvelopeFill />
                info@fakeemail.com
            </div>
        </div>
    </div>
  )
}

export default FooterInfo