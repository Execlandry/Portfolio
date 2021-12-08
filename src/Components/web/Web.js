import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#Project">
                    <i class="paint brush icon option-icon"></i>
                    Projects
                </a>

            </div>

            <div className="web-option">
                <a href="#Skills">
                <i class="laptop icon option-icon"></i>
                Skills
                </a>

            </div>

            <div className="web-option">
                <a href="#Work">
                <i class="briefcase icon option-icon"></i>
                Work
                </a>
            </div>

            <div className="web-option">
                <a href="#Contact">
                <i class="user outline icon option-icon"></i>
                Contact
                </a>
            </div>

        </div>
    )
}

export default Web
