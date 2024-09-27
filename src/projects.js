
//Lynn Zein - 301280312 - 24/09/2024

import React, {useState} from 'react';
import './stylesheet.css';
import jobapplicationform from './jobapplicationform.png';
import feedbackform from './feedbackform.png';
import dragandmove from './dragandmove.png';
import conservationswebsite from './conservationswebsite.png';



const projects = [
    
  {
    id: 1,
    title: 'Job Application Form',
    description: 'Project for course "Client Web Design"',
    imageUrl: jobapplicationform
  },
  {
    id: 2,
    title: 'Feedback Form',
    description: 'Project for course "Web Interface Design"',
    imageUrl: feedbackform
   
  },
  {
    id: 3,
    title: 'Conservations Website',
    description: 'Another project for "Client Web Design"',
    imageUrl: conservationswebsite
  },
  {
    id: 4,
    title: 'Drag And Move',
    description: 'Drag and move the face into the squares',
    imageUrl: dragandmove
  
  },


];

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (imageUrl) => {
      setSelectedImage(imageUrl);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    return (
        <div>
            <h1 className='header2'>Web Projects</h1>
            <div className="projects-container">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onClick={() => openModal(project.imageUrl)}
          />
        ))}
        {selectedImage && <Modal imageUrl={selectedImage} onClose={closeModal} />}

        
      </div>
        </div>
      
    );
  };
  

const Modal = ({ imageUrl, onClose }) => {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <img src={imageUrl} alt="Project" />
        </div>
      </div>
    );
  };

  const ProjectCard = ({ title, description, imageUrl, onClick }) => {
    return (
      <div className="project-card" onClick={onClick}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };



export default Projects;