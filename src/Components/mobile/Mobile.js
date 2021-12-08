import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">

            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="crosshairs icon"></i>
            </div>
            <div className="mobile-options">

                <div className="mobile-option">
                    <a href="#Projects">
                        <i class="paint brush icon option-icon"></i>
                    Projects
                </a>

                </div>

                <div className="mobile-option">
                    <a href="#Skills">
                        <i class="laptop icon option-icon"></i>
                Skills
                </a>

                </div>

                <div className="mobile-option">
                    <a href="#Work">
                        <i class="briefcase icon option-icon"></i>
                Work
                </a>
                </div>

                <div className="mobile-option">
                    <a href="#Contact">
                        <i class="user outline icon option-icon"></i>
                Contact
                </a>
                </div>
            </div>


        </div>
    )
}

export default Mobile
