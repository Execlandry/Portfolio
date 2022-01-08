import React from 'react'
import './social-contact.css'
import { SocialData } from '../../data/Social'
function SocialContact() {
    const data = SocialData;
    // const handleLink = () => {
    //     window.open(data.item.link);

    // }
    return (

        <div className="social-contact">
            {data.map(item => {
                return (
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <div className="social-icon-div">
                            <img src={item.icon}  alt="social media icons" className="social-icon" />
                        </div>
                    </a>
                )
            })}

        </div>
    )
}

export default SocialContact
