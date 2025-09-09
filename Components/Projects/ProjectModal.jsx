"use client"
import { useEffect } from 'react'

export default function ProjectModal({ 
  title, 
  description, 
  video,  
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
        <br />

        <div className="modal-content">
          <div className="modal-video">
            <div className="video-wrapper">
              <iframe 
                src={video} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
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

      {/* Add these styles to your CSS */}
      <style jsx>{`
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
