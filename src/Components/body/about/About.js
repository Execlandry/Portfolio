import React from 'react';
import './about.css';
import code from '../../../assets/code.png';
import codes from '../../../assets/codes.png';
// import ReactRoundedImage from "react-rounded-image";

// import profile from '../../../assets/profile.jpeg';
import SocialContact from '../../common/social-contact/SocialContact';
import { useEffect, useRef } from "react";
import { init } from 'ityped'



function About() {
    const textRef1 = useRef();
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Nikhil Kerkar,"],
        })
    }, []);

    useEffect(() => {
        init(textRef1.current, {
            showCursor: false,
            strings: ["WHO AM I?"],
        })
    }, []);

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
                    <img src={codes} className="about-picture" alt="Person holding JS" />

                </div>

            </div>

            {/* bottom of the page */}

            <div className="about-bottom">

                <div className="about-photo1">
                    <img src={code} className="about-picture" alt="Person holding JS" />

                </div>

                <div className="about-info">
                    <div className="movable">


                        <div className="info">
                            <span className="info-name1" ref={textRef1}></span>
                            <br />
                        </div>

                        <p>
                            <strong id="int"> I am a computer undergraduate student from Government Polytechnic Panajim.</strong>
                            <br /><br />
                            <p className="small">

                                I love exploring
                                new technologies and often amazed by the progress we as
                                a human species have mad
                                so far in the recent years!
                        </p>
                        </p>
                    </div>
                </div>
            </div>
            <SocialContact />

        </div>
    )
}

export default About
