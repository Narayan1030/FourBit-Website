import React from 'react'
import { FiMail,FiPhone } from "react-icons/fi";
import { PiCopyrightBold } from "react-icons/pi";
import whitelogo from "./../../assets/4bitlogowhite.png";
import blacklogo from "./../../assets/4bitlogoblack.png";
import './Footer.css'

const Footer = ({light}) => {
    return (
        
           
                <div className="footer-container">
                    <div className="footer-describe">
                        <div className="logo">
                            <img 
                             src={light?`${blacklogo}`:`${whitelogo}`} 
                             alt="FourBit Logo" 
                            className="footer-img" />
                        </div>
                        
                        <p>Building digital products and growth engines from Nepal</p>
                        <p className="copyright" style={{
                                display: "flex",
                                flexDirection:"row",
                                gap:"2px",
                                alignItems:"center"
                        }}><PiCopyrightBold/>2025 FourBit.All rights reserved.</p>
                    </div>
                    <div className="footer-nav">
                        <div className="footer-company">
                        <h3>Company</h3>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Process</li>
                        <li>Pricing</li>
                    </div>
                    <div className="footer-resources">
                        <h3>Resource</h3>
                        <li>Case studies</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>

                        <p><FiMail /> hello@fourbit.com <br /></p>
                        <p><FiPhone /> +977-98X-XXX-XXXX</p>
                    </div>
                    </div>




                </div>
        
    )
}

export default Footer