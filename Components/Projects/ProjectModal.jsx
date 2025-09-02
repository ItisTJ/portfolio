"use client"
import { useEffect } from 'react'

export default function ProjectModal({ 
  title, 
  description, 
  image,  
  technologies, 
  onClose 
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="project-modal-overlay" onClick={handleBackdropClick}>
      <div className="project-modal">
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="modal-content">
          <div className="modal-image">
            <img src={image} alt={title} />
          </div>
          
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
          
          <div className="modal-description">
            <p>{description}</p>
          </div>
          
          <div className="modal-technologies">
            <h3>Technologies Used</h3>
            <div className="technology-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 