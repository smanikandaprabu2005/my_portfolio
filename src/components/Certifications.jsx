import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Data Engineering Training',
      issuer: 'Amazon Web Services',
      description: 'Developed hands-on experience in Amazon S3, AWS EC2, IAM configurations,VPC networking, and AWS Lambda for serverless data processing.',
      badgeColor: '#FF9900'
    },
    {
      title: 'AI Agents Intensive Program',
      issuer: 'Google(via Kaggle)',
      description: 'Designed multi-agent systems to automate complex workflows and resolve multi-step analytical tasks.',
      badgeColor: '#4285F4'
    },
    
    {
      title: 'Frontend Developer (React)',
      issuer: 'HackerRank',
      description: 'Verified advanced proficiency in building dynamic, responsive user interfaces using React hooks, state management, and component architecture.',
      badgeColor: '#2EC4B6'
    },
    {
      title: 'Node (Basic)',
      issuer: 'HackerRank',
      description: 'Verified basic proficiency in building dynamic, responsive user interfaces using Node.js and related technologies.',
      badgeColor: '#007CC3'
    },
    {
      title: 'Python Programming',
      issuer: 'Infosys Springboard',
      description: 'Advanced Python programming skills and software development practices',
      badgeColor: 'purple'
    },
    {
      title: 'IEEE Technical English',
      issuer: 'IEEE',
      description: 'Professional technical communication and documentation skills',
      badgeColor: '#00629B'
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
              <span 
                className="cert-issuer" 
                style={{ backgroundColor: cert.badgeColor }}
              >
                {cert.issuer}
              </span>
            </div>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
