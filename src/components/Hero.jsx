import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const roles = ['Full Stack Developer', 'AI Engineer', 'Data Analyst']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex]
      
      if (!isDeleting && currentText === currentRole) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        // Move to next role after deleting
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setTypingSpeed(150)
      } else {
        // Typing or deleting
        setTypingSpeed(isDeleting ? 75 : 150)
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1)
          } else {
            return currentRole.substring(0, prev.length + 1)
          }
        })
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed])

 /* const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Manikanda_Prabu_S_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
*/
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="hero-image-border"></div>
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Manikanda Prabu S"
                className="hero-image"
                onError={(e) => {
                  // Try alternative image names
                  const img = e.target;
                  if (img.src.includes('profile-photo.jpg')) {
                    img.src = `${import.meta.env.BASE_URL}profile.jpg`;
                  } else if (img.src.includes('profile.jpg')) {
                    img.src = `${import.meta.env.BASE_URL}photo.jpg`;
                  } else {
                    // Hide image and show placeholder
                    img.style.display = 'none';
                    img.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="hero-image-placeholder" style={{ display: 'none' }}>
                <span>MP</span>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <div className="hero-greeting fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hello, It's Me
            </div>
            <h1 className="hero-name fade-in-up" style={{ animationDelay: '0.4s' }}>Manikanda Prabu
            </h1>
            <div className="hero-role-container fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="hero-role-prefix">And I'm a </span>
              <span className="hero-role-text typing-text">
                {currentText}
                <span className="typing-cursor">|</span>
              </span>
            </div>
            <p className="hero-description fade-in-up" style={{ animationDelay: '0.8s' }}>
              Building practical AI solutions and scalable web applications. 
              Experienced in machine learning, full-stack development, and data analytics.
            </p>
            <div className="hero-buttons fade-in-up" style={{ animationDelay: '1s' }}>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                <span>Hire Me</span>
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
