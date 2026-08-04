import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: `${import.meta.env.BASE_URL}programming-icon.png`,
      skills: ['C', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web',
      icon: `${import.meta.env.BASE_URL}web-icon.png`,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: `${import.meta.env.BASE_URL}database-icon.png`,
      skills: ['MySQL', 'Oracle', 'MongoDB']
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="category-icon-wrapper">
              <div className={`category-icon ${category.icon ? 'has-img' : ''}`}>
                {category.icon ? (
                  <img src={category.icon} alt={category.title} className="category-icon-img" />
                ) : null}
              </div>
            </div>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-tag fade-in"
                  style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <span className="skill-tag-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
