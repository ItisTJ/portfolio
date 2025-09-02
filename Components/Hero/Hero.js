"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './styles/hero.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = [
    "3rd Year Undergraduate",
    "Cyber Security Enthusiast"
  ]

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const typewriter = () => {
      const currentText = texts[textIndex]
      
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          }, typeSpeed)
        } else {
          setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
        }
      } else {
        if (charIndex > 0) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          }, deleteSpeed)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(typewriter, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [text, isDeleting, textIndex, charIndex, texts])

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank')
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('get-in-touch')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image">
            <motion.div 
              className="image-placeholder"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQEkaJXphghWgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699168959569?e=1756944000&v=beta&t=0ibECo1M0xdEQ-jA9fL8Rwu7134miNxc_ZHcgJRMMCs" 
                alt="Thisara Senadeera Profile" 
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="headline-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="main-headline">Hi, I am Thisara</h1>
            <div className="headline-info">
              <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <span className="cursor">|</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="who-am-i"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="who-am-i-title">WHO AM I?</h2>
            <div className="description">
              <p>
                A third-year undergraduate at the Faculty of Information Technology, 
                University of Moratuwa, with a strong passion for full-stack development, 
                networking, and cybersecurity. Enthusiastic about working in collaborative 
                team environments and always motivated to take on new challenges.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button 
              className="hero-btn primary-btn" 
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Resume</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </motion.button>
            
            <motion.button 
              className="hero-btn secondary-btn" 
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 