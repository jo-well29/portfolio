import React from 'react'
import '../styles/IntroPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"



const IntroPage = () => {
    return (
        <div className="introPage">
            <h1>Hi! I'm Jowel Rosario</h1>
            <h1>Full-Stack Engineer</h1>
            <a
                href="https://github.com/jo-well29"
                className="github-icon"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/jowel-rosario/"
                className="github-icon"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

        </div>
    )
}

export default IntroPage