import React from 'react'
import '../styles/ProjectCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faChrome
} from "@fortawesome/free-brands-svg-icons"

const ProjectCard = (props) => {
    return (
        <>
            <div className="project-card">
                <div className="left-info">
                    <h1>{props.name}</h1>
                    <div className="project-img">
                        <img src={props.url} alt={props.alt} />
                    </div>
                    <a
                        href={props.github}
                        className="github-icon"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href={props.site}
                        className="github-icon"
                    >
                        <FontAwesomeIcon icon={faChrome} size="2x" />
                    </a>
                </div>
                <div className="right-info">
                    <div className="description">
                        <p>{props.description}</p>
                    </div>
                </div>

            </div>
        </>
    )

}

export default ProjectCard