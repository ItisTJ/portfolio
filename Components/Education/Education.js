"use client"
import { motion } from 'framer-motion'
import './styles/education.css'

const educationData = [
  {
    id: 1,
    title: "University Of Moratuwa",
    degree: "BSc Hons in Information Technology",
    period: "2023 - 2027",
    description: "Pursuing a comprehensive degree in Information Technology with focus on software development, data structures, and modern web technologies.",
    location: "Moratuwa, Sri Lanka",
    iconImage: "https://seekicon.com/free-icon-download/book_4.png",
    achievements: ["Third Year", "Core IT Foundation"],
    position: "left"
  },
  {
    id: 2,
    title: "R/Sivali Central College",
    degree: "GCE Advanced Level (A/L)",
    period: "2021",
    description: "Completed Advanced Level examination with focus on Combined Maths, Physics and ICT as main subjects with a 2.5324 Z-Score.",
    location: "Rathnapura, Sri Lanka",
    iconImage: "https://seekicon.com/free-icon-download/book_4.png",
    achievements: ["A/L Completed", "Common Stream", "A A A"],
    position: "right"
  },
  {
    id: 3,
    title: "R/Sivali Central College",
    degree: "GCE Ordinary Level (O/L)",
    period: "2018",
    description: "GCE Ordinary Level examination completed with Information and Communication technology as a basket subject.",
    location: "Rathnapura, Sri Lanka",
    iconImage: "https://seekicon.com/free-icon-download/book_4.png",
    achievements: ["O/L Completed", "9 A's"],
    position: "left"
  }
]

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const rightItemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="education-container">
        <motion.h2 
          className="education-title"
          variants={itemVariants}
        >
          Education
        </motion.h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {educationData.map((item) => (
            <motion.div 
              key={item.id} 
              className={`timeline-item ${item.position}`}
              variants={item.position === 'left' ? itemVariants : rightItemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="timeline-node">
                <div className="node-icon">
                  <img src={item.iconImage} alt="Education" />
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="date-tag">{item.period}</div>
                  </div>
                  <h3 className="education-title-card">{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution-name">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" 
                        alt="Building" 
                        className="icon-building" 
                      />
                      {item.degree}
                    </span>
                    <span className="location">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/684/684908.png" 
                        alt="Location" 
                        className="icon-location" 
                      />
                      {item.location}
                    </span>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="achievements">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <img 
                          src="https://static.vecteezy.com/system/resources/previews/012/909/445/large_2x/green-tick-icon-3d-render-free-png.png" 
                          alt="Check" 
                          className="icon-check" 
                        />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 