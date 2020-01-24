import React from 'react'
import "../styles/Projects.css"
import ProjectCard from '../shared/ProjectCard'
import PetClub from '../project-image/petclub-pic.png'
import kidsney from '../project-image/kidsney.png'
import fantasy from '../project-image/fantasy-coders.png'
import openFridge from '../project-image/open-fridge.png'



const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ProjectCard tag1="HTML" tag2="CSS" tag3="JavaScript" name="Fantasy Coders" url={fantasy} alt="pet club" description="Fantasy Coders is the ideal site you want to use when you want to build your own coding team. You have the option to decide on your specialists and draft up your ideal team with their costs. Sign up or Sign In now and create your own Coder Team! This site was created using React for the Front-End, Express and PostgreSQL for the Back-End. " github="https://github.com/jo-well29/p3-fantasy" site="http://fantasy-coders.surge.sh/" />

            <ProjectCard tag1="HTML" tag2="CSS" tag3="JavaScript" name="Open Fridge" url={openFridge} alt="pet club" description="Open Fridge is a recipe app that generates recipe ideas depending on what's in your fridge and how much time you're willing to spend cooking! See how easy it is to make a casserole with only broccoli and a day old cheese! This application was a collaboration with a UXDI team and a team of  Software Engineers using only React." github="https://github.com/jo-well29/open-fridge" site="http://open-fridge.surge.sh/" />

            <ProjectCard tag1="HTML" tag2="CSS" tag3="JavaScript" name="Pet Club" url={PetClub} alt="pet club" description="This is my first website created after spending a week learning HTML, JavaScript, and CSS. The idea was to gain inspiration from another site and I decided to make a single page Physical Therapy site featuring dogs. " github="https://github.com/jo-well29/Pet-Club-website" site="https://lnkd.in/d7Rt4BX" />

            <ProjectCard tag1="HTML" tag2="CSS" tag3="JavaScript" name="Kidsney" url={kidsney} alt="pet club" description="First site using Reactjs and calling a 3rd Party API. I decided to make a disney+ style site using only children friendly/short educational films." github="https://github.com/jo-well29/kidsney" site="http://kidsney.surge.sh/" />



            {/* <ProjectCard tag1="HTML" tag2="CSS" tag3="JavaScript" name="Catan Board Generator" url="https://media.giphy.com/media/S3ngOKdOlB8bd6Ubwd/giphy.gif" alt="pet club" description="This is my first site I created after only spending 1-2 weeks learning HTML, JavaSctipt and CSS. Trying to.. " github="https://github.com/jo-well29/Pet-Club-website" site="https://lnkd.in/d7Rt4BX" /> */}



        </div>
    )
}

export default Projects