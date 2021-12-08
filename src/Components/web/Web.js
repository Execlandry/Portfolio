import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="/project">
                    <i class="paint brush icon option-icon"></i>
                    Projects
                </a>

            </div>

            <div className="web-option">
                <a href="/skills">
                <i class="laptop icon option-icon"></i>
                Skills
                </a>

            </div>

            <div className="web-option">
                <a href="/work">
                <i class="briefcase icon option-icon"></i>
                Work
                </a>
            </div>

            <div className="web-option">
                <a href="/contact">
                <i class="user outline icon option-icon"></i>
                Contact
                </a>
            </div>

            <div className="web-option">
                <a href="/admin">
                <i class="database icon"></i>
                Admin
                </a>
            </div>

        </div>
    )
}

export default Web
