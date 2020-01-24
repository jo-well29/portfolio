import React from 'react'
import '../styles/AboutMe.css'
import Javascript from '../logos/JavaScript-logo.png'
import HTML from '../logos/html5-logo.png'
import CSS from '../logos/css-logo.png'
import react from '../logos/react-logo.png'
import native from '../logos/react-native-logo.png'
import express from '../logos/node-js-logo.png'
import ruby from '../logos/ruby-logo.png'
import rails from '../logos/rails-logo.png'
import sql from '../logos/sql-logo.png'
import postgresql from '../logos/postgresql.png'



const AboutMe = () => {
    return (
        <div className="aboutMe" id="about">
            <div className="bio-container">
                <div className="headshot-img"></div>
                <div className="text-container">
                    <p>A growing Full-Stack Developer with a background in Education, phenomenal experience in strategic planning, adaptability, innovation, constant learning, communication and problem solving. Looking for a new set of problems that challenge the mind with the constant growing and changing environment. I am highly skilled at collaborating with my team members to tackle challenging problems and roles. As a lifelong learner, I am excited to take a new career path within a work environment that encourages growth, creativity and productivity.</p>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="logo-container">
                    <img className="javascript-logo" src={Javascript} alt="js logo" />
                    <img className="html-logo" src={HTML} alt="js logo" />
                    <img className="html-logo" src={CSS} alt="js logo" />
                    <img className="react-logo" src={react} alt="js logo" />
                    <img className="native-logo" src={native} alt="js logo" />
                    <img className="sql-logo" src={sql} alt="js logo" />
                    <img className="express-logo" src={express} alt="js logo" />
                    <img className="ruby-logo" src={ruby} alt="js logo" />
                    <img className="rails-logo" src={rails} alt="js logo" />
                    <img className="express-logo" src={postgresql} alt="js logo" />
                </div>
            </div>

        </div>
    )
}


export default AboutMe