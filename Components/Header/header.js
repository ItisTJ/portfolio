"use client"

import { useEffect, useState } from 'react'
import './styles/header.css'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const targetPosition = element.offsetTop - 80
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1000
      let start = null

      const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t * t + b
        t -= 2
        return c / 2 * (t * t * t + 2) + b
      }

      const animation = (currentTime) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      requestAnimationFrame(animation)
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-placeholder">TS</div>
          <div className="personal-name">Thilina Jayasingha</div>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="nav-link"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="mobile-nav-link"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  )
}