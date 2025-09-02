"use client"
import { motion } from 'framer-motion'
import './styles/certifications.css'

const certifications = [
  {
    id: 1,
    title: "Google Cybersecurity Professional Certificate",
    issuingBody: "Google",
    logoImage: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/PTN34OLVY336",
    logoStyle: "google-logo"
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/35979494-1bb8-426a-9295-129eb9a2f56c/public_url",
    logoStyle: "cisco-logo"
  },
  {
    id: 3,
    title: "Networking Basics",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/507d417e-4ea1-4b40-9681-373a9e8ac414/public_url",
    logoStyle: "cisco-logo"
  },
  {
    id: 4,
    title: "Introduction to Data Science",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/cbcd639b-a95b-4fbb-8de2-353b6c006441/public_url",
    logoStyle: "cisco-logo"
  }
]

export default function Certifications() {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'block'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="certifications-container">
        <motion.h2 
          className="certifications-title"
          variants={itemVariants}
        >
          Certifications
        </motion.h2>
        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id} 
              className="certification-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="cert-logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.div 
                  className={`logo-container ${cert.logoStyle}`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <img 
                    src={cert.logoImage} 
                    alt={cert.issuingBody}
                    className="logo-icon"
                    onError={handleImageError}
                  />
                  <span className="logo-icon" style={{ display: 'none' }}>
                    🎓
                  </span>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="cert-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p 
                className="cert-issuer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {cert.issuingBody}
              </motion.p>
              <motion.a 
                href={cert.verifyUrl} 
                className="verify-button" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Verify Credential
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
} 