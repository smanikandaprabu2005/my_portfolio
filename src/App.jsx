import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ResumeButton from './components/ResumeButton'
import RainEffect from './components/RainEffect'
import Hero from './components/Hero'
import Skills from './components/Skills'
//import AreasOfInterest from './components/AreasOfInterest'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
//import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      const progressBar = document.querySelector('.scroll-progress')
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app">
      <RainEffect />
      <ResumeButton />
      <div className="scroll-progress"></div>
      <Navbar />
      <Hero />
      <Skills />
      {/* <AreasOfInterest /> */}
      <Projects />
      <Achievements />
      {/* <Leadership /> */}
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
