import React from 'react'
import './project.css'
import ProjectCards from './ProjectCards'
import {ProjectData} from '../../data/Projects'
import Separator from '../../common/separator/Separator'
function Projects() {
    const data=ProjectData;
    return (
        <div className="project">
            <Separator/>
            <label htmlFor="" className="section-title">Project</label>
            <div>
                {data.map(project=>{
                    return <> 
                    <ProjectCards project={project}/>
                    <Separator/>
                    </>
                })}
            </div>
        </div>
    )
}

export default Projects
