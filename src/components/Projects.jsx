import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Stock Price Prediction',
      description: 'Developed an AI-powered stock price prediction system using machine learning algorithms with real-time data integration. Achieved improved prediction accuracy through feature engineering and model optimization.',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Data Visualization', 'APIs'],
      githubUrl: 'https://github.com/smanikandaprabu2005/Stock-Price-Prediction',
      projectUrl: '#'
    },
    {
      title: 'ATM Anomaly Detection using CLIP Autoencoder',
      description: 'Built an anomaly detection system using CLIP (Contrastive Language-Image Pre-training) Autoencoder to identify unusual patterns in ATM transaction data. Successfully implemented deep learning solution for fraud detection.',
      technologies: ['Deep Learning', 'Python', 'TensorFlow/Keras', 'CLIP Model', 'Autoencoder'],
      githubUrl: 'https://github.com/smanikandaprabu2005/atm-anomaly-detection',
      projectUrl: '#'
    },
    {
      title: 'Fuel & Fix – Online Fuel Delivery Platform',
      description: 'Created a full-stack web application for on-demand fuel delivery with repair services integration. Delivered a complete e-commerce solution demonstrating full-stack development skills.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/smanikandaprabu2005/fuel-and-fix',
      projectUrl: 'https://fuel-and-fix-frontend.onrender.com/'
    },
    {
      title: 'Flight Management System',
      description: 'Developed a desktop application for comprehensive flight management including booking, scheduling, and customer management. Built a functional desktop application showcasing GUI development skills.',
      technologies: ['Python', 'Tkinter', 'SQLite', 'Object-Oriented Programming'],
      githubUrl: '#',
      projectUrl: '#'
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in">
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-actions">
              <a href={project.githubUrl} className="btn-github" target="_blank" rel="noopener noreferrer">
                View Github
              </a>
              <a href={project.projectUrl} className="btn-project" target="_blank" rel="noopener noreferrer">
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
