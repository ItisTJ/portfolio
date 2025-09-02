"use client"
import { motion } from 'framer-motion'
import './styles/skills.css'

const skills = [
  {
    name: "HTML",
    image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_logo_icon_146477.png",
  },
  {
    name: "CSS",
    image: "https://logospng.org/download/css-3/logo-css-3-2048.png",
  },
  {
    name: "JavaScript",
    image: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
  },
  {
    name: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "React JS",
    image: "https://reactjsdeveloper.com/images/react_icon-min.png",
  },
  {
    name: "Next JS",
    image: "https://distrocode.com/wp-content/uploads/2023/09/png-transparent-next-js-hd-logo-1.png",
  },
  {
    name: "Nest JS",
    image: "https://img.icons8.com/color/480/000000/nestjs.png",
  },
  {
    name: "Node JS",
    image: "https://api.qspiders.com/media/course_images/node-js_a3KAOmA.png",
  },
  {
    name: "MongoDB",
    image: "https://w7.pngwing.com/pngs/634/68/png-transparent-mongo-db-mongodb-database-document-oriented-nosql-mongodb-logo-3d-icon.png",
  },
  {
    name: "MySQL",
    image: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
  },
  {
    name: "Microsoft SQL Server",
    image: "https://silk.us/wp-content/uploads/2021/03/sql-server-logo-white.png",
  },
  {
    name: "Python",
    image: "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
  },
  {
    name: "Micro Python",
    image: "https://archive.org/download/micropython-1.12/Micropython-logo.svg.png",
  },
  {
    name: "Java",
    image: "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png",
  },
  {
    name: "C",
    image: "https://img.icons8.com/fluency/140/c-programming.png",
  },
  {
    name: "Git",
    image: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/git-13.png",
  },
  {
    name: "GitHub",
    image: "https://www.pngmart.com/files/23/Github-Logo-PNG-Pic.png",
  },
  {
    name: "Linux",
    image: "https://static.vecteezy.com/system/resources/previews/016/460/767/non_2x/linux-os-logo-top-operating-system-signs-free-png.png",
  },
  {
    name: "Wireshark",
    image: "https://th.bing.com/th/id/R.e55fef93193bd780d331e51eb640a804?rik=7on21czWB%2fMQCw&riu=http%3a%2f%2fwww.mimastech.com%2fwp-content%2fuploads%2f2017%2f03%2fWireshark_Logo.png&ehk=tMBoC1N%2bJngIIkH85HYjAfA1Njr9EAxV2JFTuDY76kM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Packet Tracer",
    image: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png",
  }
]

export default function Skills() {
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          variants={itemVariants}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="skill-icon">
                <img 
                  src={skill.image} 
                  alt={skill.name}
                  className="skill-image"
                  onError={handleImageError}
                />
                <span className="skill-emoji" style={{ display: 'none' }}>
                  💼
                </span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
} 