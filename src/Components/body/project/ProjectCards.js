import React from 'react'
import './project-card.css';

function ProjectCards({ project }) {
    return (
        <div className="project-card">

            <div className="project-info">

                <label className="project-title" htmlFor="">{project.title}</label>

                <div className="project-links">
                    {project.github && (
                        <a href={project.github} className="project-link">
                            <div className="link-button">
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
            <img src={project.image} alt="" className="project-photo" />

        </div>
    )
}

export default ProjectCards
