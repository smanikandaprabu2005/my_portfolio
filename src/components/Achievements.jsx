import React from 'react'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      category: 'Hackathons',
      items: [
        {
          title: 'CUK AI-thon 2026',
          description: 'Domain Winner'
        },
        {
          title: 'Sprintathon 2025',
          description: 'Top 100 Teams'
        },
        {
          title: 'Smart India Hackathon (SIH) 2025',
          description: 'Internal Selection'
        }
      ]
    },
    {
      category: 'Sports',
      items: [
        {
          title: 'Handball (2024)',
          description: 'CM Trophy & Zone Championship - 2nd Place'
        }
      ]
    }
  ]

  return (
    <section id="achievements" className="section achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((category, categoryIndex) => (
          <div key={categoryIndex} className="achievement-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="achievements-grid">
              {category.items.map((achievement, index) => (
                <div key={index} className="achievement-card fade-in">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
