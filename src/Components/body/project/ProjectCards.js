import React from 'react'
import './project-card.css';
import ReactRoundedImage from "react-rounded-image";

function ProjectCards({ project }) {

    return (
        <div className="project-card">

            <div className="project-info">

                <label className="project-title" htmlFor="">{project.title}</label>

                <div className="project-links">
                    {project.github && (

                        <a  href={project.github} target="_blank" rel="noreferrer" className="project-link">

                            <div className="link-button" >
                                <i class="github icon"></i>Github
                            </div>
                        </a>
                    )}
                </div>

                <p>{project.about}</p>

                <div className="project-tags">
                    {project.tags.map(tag => {
                        return (
                            <label htmlFor="" className="tag">{tag}</label>
                        )
                    })}
                </div>

            </div>
            <ReactRoundedImage className="project-photo"
            image={project.image}
            imageHeight="200" 
            imageWidth="300"
            roundedSize="15"
            borderRadius="30"
            hoverColor="aquamarine"
              />

        </div>
    )
}

export default ProjectCards
