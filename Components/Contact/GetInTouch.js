"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import './styles/contact.css'

const initialFormData = {
  name: '',
  email: '',
  message: ''
}

export default function GetInTouch() {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    const mailtoLink = `mailto:thilinajayasingha2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open default email client
    window.open(mailtoLink)
    
    // Reset form
    setFormData(initialFormData)
  }

  return (
    <motion.section 
      className="get-in-touch"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="get-in-touch-container">
        <motion.h2 
          className="get-in-touch-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows={5}
            required
          />
          <motion.button 
            type="submit" 
            className="send-message-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  )
} 