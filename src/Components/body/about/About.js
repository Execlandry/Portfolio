import React from 'react';
import './about.css';
import code from '../../../assets/code.png';
import SocialContact from '../../common/social-contact/SocialContact';
import {useEffect, useRef} from "react";
import {init} from 'ityped'



function About() {
    const textRef=useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor:false,
            strings:["Nikhil Kerkar,"],
        })
    },[]);

    return (
        <div className="about">
            <div className="about-top">

                <div className="about-info">
                    Hello There 👋,I am <br /><br />
                    <span className="info-name" ref={textRef}></span>
                    <br /><br />
        I ❤️ Programming
        </div>

                <div className="about-photo">
                    <img src={code} className="about-picture" alt="Person holding JS" />

                </div>

            </div>
            <SocialContact/>

        </div>
    )
}

export default About
