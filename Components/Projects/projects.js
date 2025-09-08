"use client"
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import './styles/projects.css'

const projectsData = [
  {
    title: "E-commerce Website Builder (Sellaro)",
    description: "A full-featured web application that enables small and medium-sized businesses to create customizable and secure e-commerce websites.",
    fullDescription: "A full-featured web application that enables small and medium-sized businesses to create customizable and secure e-commerce websites. Developed using the MERN stack with Next.js, Nest.js and MongoDB, it includes features like plugin-based customization, employee permission control, dynamic banner editing with Fabric.js, and payment methods. Led the development and project management.",
    image: "/Projects/sellaro.png",
    technologies: ["Next.js", "Nest.js", "MongoDB", "React"],
    githubUrl: "https://github.com/yourusername/sellaro",
    linkedinUrl: "https://linkedin.com/in/yourusername"
  },
  {
    title: "Smart Food Vending Machine (Bun & Run)",
    description: "An innovative vending machine project powered by ESP32 and MicroPython with touchscreen interface and QR-based payments.",
    fullDescription: "An innovative vending machine project powered by ESP32 and MicroPython. Features include a touchscreen interface, QR-based payments, automated inventory management, and real-time updates via Firebase. Developed with a user-friendly focus, integrating hardware control with a Node.js backend and admin panel.",
    image: "Projects/bun&run.png",
    technologies: ["ESP32", "Node.js", "Firebase", "MicroPython"],
    githubUrl: "https://github.com/yourusername/bun-run",
    linkedinUrl: "https://linkedin.com/in/yourusername"
  },
  {
    title: "E-commerce Platform for Bathware (Bathlux)",
    description: "A web development group project where you led the frontend with HTML, CSS, JavaScript and PHP backend.",
    fullDescription: "A web development group project where you led the frontend. Built with HTML, CSS, and JavaScript on the frontend and PHP with SQL on the backend, this e-commerce site allowed browsing, ordering, and inventory tracking of bathware products.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    githubUrl: "https://github.com/yourusername/bathlux",
    linkedinUrl: "https://linkedin.com/in/yourusername"
  }
]

export default function Projects() {
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
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                linkedinUrl={project.linkedinUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}