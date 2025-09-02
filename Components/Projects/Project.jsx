"use client";

export default function Project({ title, subtitle, description, isReversed }) {
  return (
    <div className={`project-showcase ${isReversed ? 'project-reverse' : ''}`}>
      <div className="project-content">
        <div className="project-text">
          <div className="project-header">
            {title && <span className="project-label">{title}</span>}
            <h2 className="project-title">{subtitle}</h2>
          </div>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-mockup">
          <div className="mockup-content">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="mockup-body">
              <div className="mockup-nav">
                <div className="nav-item"></div>
                <div className="nav-item"></div>
                <div className="nav-item"></div>
              </div>
              <div className="mockup-main">
                <div className="content-block"></div>
                <div className="content-block"></div>
                <div className="content-block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 