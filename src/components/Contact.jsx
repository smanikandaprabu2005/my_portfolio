import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' })
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-subtitle">Get in Touch</h3>
          <p className="contact-description">
            I'm open to opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:+91XXXXXXXXXX" className="contact-link">
                +91 9994103347
              </a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:smanikandaprabu2005@gmail.com" className="contact-link">
                smanikandaprabu2005@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a 
                href="https://www.linkedin.com/in/manikanda-prabu-s/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
              linkedin-manikanda-prabu-s
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
