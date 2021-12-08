import React,{useState} from 'react'
import './header.css'
import Web from '../web/Web';
import Mobile from '../mobile/Mobile'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo">Portfolio</div>
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
