
//Lynn Zein - 301280312 - 24/09/2024

import React from 'react';
import './stylesheet.css';
import Picture from './forest.jpg';

const AboutMePage = () => {
    return (
        <div className='content-container2'>
            <h1 className='headeraboutme'>About Me</h1>
            <p className='paragraph'>Welcome to my personal website! I'm Lynn Zein, artist name "Melolyn". I began my academic journey studying Human Resources Management, 
                where I developed a strong foundation in understanding people and organizational dynamics. 
                However, my passion for technology led me to pivot my focus to Software Engineering, where I’m currently honing my skills in coding and web development. 
                Alongside my technical pursuits, I express my creativity through rap music, blending my love for rhythm and storytelling. 
                Here, you'll find a showcase of my projects, both in web development and my musical creations. Thank you for stopping by!</p>
                <img alt="forest" src={Picture} className='picture'></img>
        </div>
    );
};

export default AboutMePage;