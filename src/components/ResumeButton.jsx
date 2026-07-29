import React from 'react'
import './ResumeButton.css'

const ResumeButton = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/public/Resume.pdf'
    link.download = 'Manikanda_Prabu_S_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <button className="resume-btn" onClick={handleResumeDownload}>
      <span>Get Resume</span>
    </button>
  )
}

export default ResumeButton