import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'Human-Computer Interaction (HCI)',
      issuer: 'NPTEL',
      description: 'Comprehensive understanding of user interface design and interaction patterns',
      badgeColor: 'purple'
    },
    {
      title: 'Industry 4.0 & IIoT',
      issuer: 'Industry Certification',
      description: 'Knowledge of Industry 4.0 technologies and Industrial Internet of Things',
      badgeColor: 'blue'
    },
    {
      title: 'Python Programming',
      issuer: 'Infosys Springboard',
      description: 'Advanced Python programming skills and software development practices',
      badgeColor: 'blue'
    },
    {
      title: 'IEEE Technical English',
      issuer: 'IEEE',
      description: 'Professional technical communication and documentation skills',
      badgeColor: 'blue'
    }
  ]

  return (
    <section id="certifications" className="section certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card fade-in">
            <div className="cert-header">
              <h3 className="cert-title">{cert.title}</h3>
              <span className={`cert-issuer cert-issuer-${cert.badgeColor}`}>{cert.issuer}</span>
            </div>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
