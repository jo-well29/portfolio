import React from 'react'
import '../styles/Header.css'
import Pdf from '../Documents/Jowel-Resume.pdf'


const Header = () => {
    return (
        <>
            <div className="header-container">
                <h2>Jowel Rosario</h2>
                <div className="navlinks">
                    <ul>
                        <a href='#about'><li>About Me</li></a>
                        <a href='#projects'><li>Projects</li></a>
                        <a href={Pdf}><li>Resume</li></a>
                        <a href='#footer'><li>Contact Me</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header