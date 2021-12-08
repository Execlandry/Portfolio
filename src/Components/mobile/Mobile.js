import React from 'react'
import { NavLink } from 'react-router-dom'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">

            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="crosshairs icon"></i>
            </div>
            <div className="mobile-options">

                <div className="mobile-option">
                    <NavLink to="/project">
                        <i class="paint brush icon option-icon"></i>
                    Projects
                </NavLink>

                </div>

                <div className="mobile-option">
                    <NavLink to="/skills">
                        <i class="laptop icon option-icon"></i>
                Skills
                </NavLink>

                </div>

                <div className="mobile-option">
                    <NavLink to="/work">
                        <i class="briefcase icon option-icon"></i>
                Work
                </NavLink>
                </div>

                <div className="mobile-option">
                    <NavLink to="/contact">
                        <i class="user outline icon option-icon"></i>
                Contact
                </NavLink>
                </div>

                <div className="mobile-option">
                <NavLink to="/admin">
                <i class="database icon"></i>
                Admin
                </NavLink>
            </div>
            </div>


        </div>
    )
}

export default Mobile
