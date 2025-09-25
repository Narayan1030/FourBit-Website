import { FiFacebook,FiLinkedin,FiMail,FiPhone } from "react-icons/fi";

import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section className='contact-section'>
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Tell us about your project</h2>
                    <p>We typically reply within one business day.</p><hr />
                    <form >
                        <input type="text" placeholder='your name' required />
                        <input type="text" placeholder='Email' required />
                        <input type="text" placeholder='company/organization' required />
                        <textarea placeholder='What are you trying to build or grow?' rows="4" required />

                        <button type='submit'> Send Message </button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Contact details</h2>
                    <p className='special'>Prefer a direct line? Reach us anytime.</p><hr />
                    <a href="#"><FiPhone />+977-98-XXX-XXX</a>
                    <a href="mailto:hello@fourbit.com"><FiMail />hello@fourbit.com</a>
                    <a href="https://www.linkedin.com/company/thefourbit" target="blank"><FiLinkedin />linked.com/company/Fourbit</a>
                    <a href="https://www.facebook.com/thefourbit" target="blank"><FiFacebook />facebook.com/Fourbit</a>
                    <div className='offshore-box'>
                        <h3>Open for Offsharing</h3>
                        <p className='special'> We partner worldwide to deliver cost-effective,high-quality builds from Nepal</p>
                    </div>
                </div>
            </div>
            <hr />


        </section>
    )
}

export default Contact