import React from 'react'
import './Leadership.css'

const Leadership = () => {
  return (
    <section id="leadership" className="section leadership-section">
      <h2 className="section-title">Leadership & Responsibility</h2>
      <div className="leadership-container">
        <div className="leadership-card fade-in">
          <div className="leadership-header">
            <h3 className="leadership-title">Office Bearer</h3>
            <span className="leadership-year">2025</span>
          </div>
          <div className="leadership-details">
            <div className="leadership-orgs">
              <span className="org-badge">NSS</span>
              <span className="org-badge">IE Club</span>
            </div>
            <p className="leadership-description">
              Serving as an Office Bearer for both the National Service Scheme (NSS) and 
              the IE (Industrial Engineering) Club, taking on responsibilities for organizing 
              events, managing club activities, and supporting student initiatives.
            </p>
          </div>
        </div>

        <div className="leadership-card fade-in">
          <div className="leadership-header">
            <h3 className="leadership-title">Automation System Development</h3>
          </div>
          <div className="leadership-details">
            <p className="leadership-description">
              Built an automation system for generating certificates, notices, and circulars, 
              streamlining administrative processes and improving efficiency for club operations. 
              This project demonstrates practical application of programming skills to solve 
              real-world organizational challenges.
            </p>
            <div className="automation-features">
              <div className="feature-item">Certificate Generation</div>
              <div className="feature-item">Notice Management</div>
              <div className="feature-item">Circular Distribution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
