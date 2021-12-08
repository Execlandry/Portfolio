import React,{useState} from 'react'
import './header.css'
import Web from '../web/Web';
import Mobile from '../mobile/Mobile'
import {NavLink} from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
        <NavLink to="/">
            <div className="logo">Portfolio</div>
        </NavLink>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <i className="bars icon menu-icon"></i>
                    </div>
                    {isOpen&& <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>

        </div>
    )
}

export default Header
