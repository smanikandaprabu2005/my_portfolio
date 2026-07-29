import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(targetId)
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

  const navItems = [
    {
      id: 'hero',
      label: 'Home',
      icon: 'home-outline',
      gradient: '--i:#a955ff;--j:#ea51ff'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: 'code-outline',
      gradient: '--i:#56CCF2;--j:#2F80ED'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'bulb-outline',
      gradient: '--i:#80FF72;--j:#7EE8FA'
    },
    {
      id: 'achievements',
      label: 'Awards',
      icon: 'trophy-outline',
      gradient: '--i:#ffa9c6;--j:#f434e2'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: 'mail-outline',
      gradient: '--i:#ff6b6b;--j:#ffa500'
    }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              style={{ '--i': item.gradient.split('--i:')[1].split(';')[0], '--j': item.gradient.split('--j:')[1] }}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <span className="icon">
                <ion-icon name={item.icon}></ion-icon>
              </span>
              <span className="title">{item.label}</span>
            </li>
          ))}
        </ul>
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
