"use client"

import { useState, useEffect } from 'react'
import Header from '../Components/Header/header'
import Hero from '../Components/Hero/Hero'
import Education from '../Components/Education/Education'
import Certifications from '../Components/Certifications/Certifications'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/projects'
import GetInTouch from '../Components/Contact/GetInTouch'
import Contact from '../Components/Contact/contact'
import Footer from '../Components/Footer/footer'
import BackgroundAnimation from '../Components/BackgroundAnimation/BackgroundAnimation'

// Import your Loader component
import Loader from '../Components/Loader/Loader'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Cleanup timer
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        {/* <section id="certifications">
          <Certifications />
        </section> */}
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
