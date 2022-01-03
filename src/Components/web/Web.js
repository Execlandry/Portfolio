import React from 'react'
import './web.css'
import {NavLink} from "react-router-dom"

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <NavLink to="/project">
                    <i class="paint brush icon option-icon"></i>
                    Projects
                </NavLink>

            </div>

            <div className="web-option">
                <NavLink to="/skills">
                <i class="laptop icon option-icon"></i>
                Skills
                </NavLink>

            </div>

            <div className="web-option">
                <NavLink to="/work">
                <i class="briefcase icon option-icon"></i>
                Work
                </NavLink>
            </div>

            <div className="web-option">
                <NavLink to="/contact">
                <i class="user outline icon option-icon"></i>
                Contact
                </NavLink>
            </div>

            {/* <div className="web-option">
                <NavLink to="/admin">
                <i class="database icon"></i>
                Admin
                </NavLink>
            </div> */}

        </div>
    )
}

export default Web
