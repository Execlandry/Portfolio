import React from 'react'
import './work-card.css'
function WorkCard({item}) {
    return (
        <div className="work-card">
        <img src={item.companyLogo} className="work-logo" alt="justt" />
            <div className="work-info">
                <label htmlFor="" className="company-name">{item.company}</label>
                <div>
                    <label htmlFor="" className="work-dates">{item.dateJoining}-{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
