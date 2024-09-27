
//Lynn Zein - 301280312 - 24/09/2024

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet.css';
import smileyImage from './smileywelcome.jpg';
import melolynLogo from './melolynlogo.png';
import KOFshot from './KOFshot.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMePage from './aboutmepage';
import ContactMePage from './contactme';
import Projects from './projects';
import Services from './services';

function App() {
  // Effect to make image shake when pressed on
  useEffect(() => {
    const image = document.getElementById('shakeImage');

    // Define the shake function
    const handleShake = () => {
      image.classList.add('shake');
      setTimeout(() => {
        image.classList.remove('shake');
      }, 500);
    };

    // Add the click event listener if image exists
    if (image) {
      image.addEventListener('click', handleShake);
    }

    // Clean up the event listener
    return () => {
      if (image) {
        image.removeEventListener('click', handleShake);
      }
    };
  }, []); 

  return (
    <Router>
    <div  >
      <h1 id="shakeImage"
    style={{ cursor: 'pointer' }} className="header-container">
        <a className='welcomemessage'>Welcome</a>
        <img
          src={smileyImage}
         
          alt="Welcome Smiley"
          className='imagesize'
        />
      </h1>
     
  
     <nav id="navbar">
        <ul>
          <li><a href="/">Home Page</a></li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link to="/projects">Projects Page</Link></li>
          <li><a href="https://www.youtube.com/@Melolynflow" target="_blank">Music</a></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contactme">Contact Me</Link></li>
          <img src={melolynLogo} alt='MelolynLogo' className='logosize'/>
        </ul>
        
      </nav>
     

      <Routes>
          <Route path="/" element={
            <>
              <img src={KOFshot} alt="MusicVideoShot" className='backgroundimage'></img>
              <h2 className='header2'>Mission Statement</h2>
              <p className='paragraph'>
                Welcome to my personal space where creativity meets technology. 
                As a web developer and artist, I combine innovation and rhythm to bring my projects to life. 
                This site showcases my journey in both the digital world and music, sharing my passion for coding and rap with the world. 
                Explore my web projects and my original tracks, a flow of the intersection of art and tech
              </p>
            </>
          } />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/contactme" element={<ContactMePage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </div>
    </Router>
    
  );




} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

