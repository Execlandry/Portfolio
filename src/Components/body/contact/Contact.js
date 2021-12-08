import React from 'react'
import './contact.css'
import Separator from "../../common/separator/Separator";
import SocialContact from '../../common/social-contact/SocialContact'

function Contact() {
    return (
        <div className="contact">
        <Separator/>
        <label htmlFor="" className="section-title">Contact</label>
        <div className="contact-container">

            <div className="contact-left">
                <p>Want to get in touch?Contact me on any of the platform</p>
                <SocialContact/>
            </div>

            <div className="download">
            <a download href={require('../../../assets/resume.pdf').default}>
            <i class="cloud download icon">

            </i>
                Download Resume
            </a>

            </div>
        </div>
            
        </div>
    )
}

export default Contact
