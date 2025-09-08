"use client"
import { motion } from "framer-motion"
import "./styles/contact.css"

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

const contactData = [
  {
    id: "email",
    title: "Email",
    value: "thilinajayasingha2003@gmail.com",
    icon: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-email-mail-application-vector-png-image_12256702.png"
  },
  {
    id: "phone", 
    title: "Phone",
    value: "+94 76 1521 775",
    icon: "https://static.vecteezy.com/system/resources/thumbnails/014/441/078/small_2x/phone-call-icon-design-in-blue-circle-png.png"
  },
  {
    id: "location",
    title: "Location", 
    value: "Moratuwa, Sri Lanka",
    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thisara-senadeera-404b43299",
    icon: faLinkedin,
    className: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/2000Thisara",
    icon: faGithub,
    className: "github",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/94779642375",
    icon: faWhatsapp,
    className: "whatsapp",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thisara_senadeera",
    icon: faInstagram,
    className: "instagram",
  },
]

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="contact-container">
        {/* Contact Info */}
        <motion.div className="contact-cards" variants={containerVariants}>
          {contactData.map((contact) => (
            <motion.div
              key={contact.id}
              className="contact-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`card-icon ${contact.id}-icon`}>
                <img className="contact-icon" src={contact.icon} alt={`${contact.title} icon`} width={40} />
              </div>
              <h3 className="card-title">{contact.title}</h3>
              <p className="card-value">{contact.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media */}
        <motion.div className="social-section" variants={containerVariants}>
          <motion.h3 className="social-title" variants={cardVariants}>
            Connect with me on <span className="highlight">Social Media</span>
          </motion.h3>
          <motion.div className="social-icons" variants={containerVariants}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${social.className}`}
                aria-label={`Connect on ${social.name}`}
                variants={socialVariants}
                custom={index}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
