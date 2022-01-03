import React from 'react'
import './contact.css'
import Separator from "../../common/separator/Separator";
import SocialContact from '../../common/social-contact/SocialContact'
import { useEffect, useRef } from "react";
import { init } from 'ityped'
import conpic from "../../../assets/contact.png"

function Contact() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Want to get in touch?", "Contact me on any of the platform below"],
        })
    }, []);
    return (
        <div className="contact">
            <Separator />
            <label htmlFor="" className="section-title">Contact</label>
            <div className="contact-container">

                <div className="contact-pic">
                    <figure>
                        <img className="conpic" src={conpic} alt="contact us" />
                    </figure>
                </div>

                <div className="contact-left">
                    <span ref={textRef}></span>
                    <SocialContact />
                </div>

                <div className="download">
                    <a download href={require('../../../assets/resume.pdf').default}>
                        <i class="cloud download icon"> </i>
                Download Resume
            </a>

                </div>
            </div>

        </div>
    )
}

export default Contact
