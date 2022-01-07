import React from 'react'
import './work.css'
import cgif from '../../../assets/Completed.png';
import work from '../../../assets/work.png'
import ReactRoundedImage from "react-rounded-image";
import Separator from '../../common/separator/Separator'
import { WorkData } from '../../data/Work'
import WorkCard from './WorkCard'
import workies from '../../../assets/workies.png'


function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label htmlFor="" className="section-title">
                Work
        </label>
            <div className="work-top">
                <div className="workCont">
                    <ReactRoundedImage
                        image={work}
                        roundedColor="#d4d4d4"
                        imageWidth="300"
                        imageHeight="300"
                        roundedSize="13"
                        borderRadius="70"
                        // hoverColor="#00ffff"
                    />
                </div>
                <div className="workiesCont">
                    <ReactRoundedImage
                        image={workies}
                        roundedColor="#d4d4d4"
                        imageWidth="300"
                        imageHeight="300"
                        roundedSize="13"
                        borderRadius="70"
                        // hoverColor="#00ffff"
                    />
                </div>
            </div>
            <div className="work-list">
                {data.map(item => {
                    return (
                        <WorkCard item={item} />
                    )
                })}
            </div>

            <div className="work-btm">
                <div className="cgifCont">

                    <ReactRoundedImage
                        image={cgif}
                        roundedColor="#d4d4d4"
                        imageWidth="200"
                        imageHeight="200"
                        roundedSize="8"
                        borderRadius="100"
                        // hoverColor="#00ffff"
                    />
                </div>


            </div>

        </div>
    )
}

export default Work
