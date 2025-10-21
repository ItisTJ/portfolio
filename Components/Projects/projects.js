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
    video: "https://www.youtube.com/embed/YlMMz94yDKE?si=drP522_qxuNC0qBa&autoplay=1&mute=1",
    technologies: ["Next.js", "Nest.js", "MongoDB", "React"],
    githubUrl1: "https://github.com/ItisTJ/my-app",
    githubUrl2: "https://github.com/2000Thisara/server",
    linkedinUrl: "https://www.linkedin.com/in/thilina-jayasingha-717241287/"
  },
  {
    title: "Smart Food Vending Machine (Bun & Run)",
    description: "An innovative vending machine project powered by ESP32 and MicroPython with touchscreen interface and QR-based payments.",
    fullDescription: "An innovative vending machine project powered by ESP32 and MicroPython. Features include a touchscreen interface, QR-based payments, automated inventory management, and real-time updates via Firebase. Developed with a user-friendly focus, integrating hardware control with a Node.js backend and admin panel.",
    image: "Projects/bun&run.png",
    video: "https://www.youtube.com/embed/v2uJJjcb4LI?si=mI3fJ8auBZfEHDA-&autoplay=1&mute=1",
    technologies: ["ESP32", "Node.js", "Firebase", "MicroPython"],
    linkedinUrl: "https://www.linkedin.com/in/thilina-jayasingha-717241287/"
  },
  {
    title: "E-commerce Platform for Bathware (Bathlux)",
    description: "A web development group project where you led the frontend with HTML, CSS, JavaScript and PHP backend.",
    fullDescription: "A web development group project where you led the frontend. Built with HTML, CSS, and JavaScript on the frontend and PHP with SQL on the backend, this e-commerce site allowed browsing, ordering, and inventory tracking of bathware products.",
    image: "https://images.squarespace-cdn.com/content/v1/63804e4bd85c037faa57149d/1670964995333-YY13DLLHUDQG862GIITA/unsplash-image-Lfl8COM_ue8.jpg",
    video: "https://www.youtube.com/embed/QyGax8JEP40?si=KTqzfShR2FENAMqe&modestbranding=1&rel=0&controls=1&autoplay=1&mute=1",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    githubUrl1: "https://github.com/lahiruimesh/BATHLUXE",
    linkedinUrl: "https://www.linkedin.com/in/thilina-jayasingha-717241287/"
  },

  {
    title: "EVINC - Animation Workshop and Competetition",
    description: "Chairman of EVINC 2023, the premier animation workshop and competition in Sri Lanka. connected with Leo club of University of Moratuwa.",
    fullDescription: "Chairman of EVINC 2023, the premier animation workshop and competition in Sri Lanka organized by Leo club of University of Moratuwa. Organized workshops, guest lectures, and a national competition to promote animation skills among students. Managed a team of volunteers and coordinated with industry professionals to ensure a successful event.",
    image: "/Projects/evinc.png",
    video: "https://www.youtube.com/embed/3vyEfH7k7hA?si=cI1n6tWOig8tYC6D&modestbranding=1&rel=0&controls=1&autoplay=1&mute=1",
    technologies: ["Blender"],
    youtubeUrl1: "https://www.youtube.com/playlist?list=PL9E-L1KosNppJ9Rl-X2c1ULTs_FnoRE-I",
    youtubeUrl2: "https://www.youtube.com/playlist?list=PL9E-L1KosNpp3pLTVxt7y_DQIPI-gTc3o",
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
                video={project.video}
                technologies={project.technologies}
                githubUrl1={project.githubUrl1}
                githubUrl2={project.githubUrl2}
                linkedinUrl={project.linkedinUrl}
                youtubeUrl1={project.youtubeUrl1}
                youtubeUrl2={project.youtubeUrl2}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}